import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { expect, test } from 'vitest';
import { featuredProjects, projects } from './data/projects';
import { redirects } from './data/redirects';
import { footerLinks, indexedPaths, navLinks, projectHref, sitemap } from './data/links';
import { siteUrl } from './meta/meta';

const readPage = (route: string) =>
  readFileSync(path.join(import.meta.dirname, '../build/client', route, 'index.html'), 'utf8');

const escapeHtml = (text: string) => text.replace(/'/g, '&#x27;');

const pages = [
  {
    route: '/',
    title: 'Mitch Lui | Senior Software Engineer',
    description: 'Mitch Lui, Senior Software Engineer at Wise in London.',
    content: featuredProjects.map(([id]) => `href="${projectHref(id)}"`)
  },
  {
    route: '/work/',
    title: 'Work | Mitch Lui',
    description: 'Work at Wise and Asiabots, plus earlier university, hackathon and personal projects.',
    content: Object.keys(projects).map(id => `href="${projectHref(id)}"`)
  },
  {
    route: '/sitemap/',
    title: 'Sitemap | Mitch Lui',
    description: 'Every page on mitchlui.dev.',
    content: Object.keys(projects).map(id => `href="${projectHref(id)}"`)
  },
  {
    route: '/not-found',
    title: 'Not found | Mitch Lui',
    description: 'Page not found',
    content: ['>Page not found</h1>']
  },
  ...Object.entries(projects).map(([id, project]) => ({
    route: projectHref(id),
    title: `${project.title} | Mitch Lui`,
    description: escapeHtml(project.headline),
    content: [`>${project.title}</h1>`]
  }))
];

test.each(pages)('prerenders $route with its title and description meta', ({ route, title, description }) => {
  const html = readPage(route);
  expect(html).toContain(`<title>${title}</title>`);
  expect(html).toContain(`<meta name="description" content="${description}"/>`);
});

test.each(pages)('prerenders the content of $route into the HTML', ({ route, content }) => {
  const html = readPage(route);
  content.forEach(fragment => expect(html).toContain(fragment));
});

test.each(pages)('paints $route with the theme background before the stylesheet loads', ({ route }) => {
  const head = readPage(route).split('<link rel="stylesheet"')[0];
  expect(head).toContain('html{background:#F7F5EF');
  expect(head).toContain('@media (prefers-color-scheme:dark){html{background:#0C1210');
});

test.each(pages)('prerenders $route visible without JavaScript', ({ route }) => {
  expect(readPage(route)).not.toMatch(/style="[^"]*opacity:\s*0/);
});

test.each(Object.entries(redirects))('prerenders %s as a meta refresh to its target', (route, target) => {
  expect(readPage(route)).toContain(`<meta http-equiv="refresh" content="0; url=${target}"/>`);
});

test.each([...navLinks, ...footerLinks, ...sitemap.pages])('links $label to a page that ships', ({ href }) => {
  const built = path.join(import.meta.dirname, '../build/client', href);
  expect(existsSync(path.join(built, 'index.html')) || existsSync(built)).toBe(true);
});

test('prerenders both the desktop links and the phone menu button so neither swaps in after load', () => {
  const home = readPage('/');
  expect(home).toContain('aria-label="Open menu"');
  expect(home).toContain('href="/work/"');
});

const indexed = pages.filter(({ route }) => route !== '/not-found');

test.each(indexed)('gives $route an absolute canonical URL and share tags', ({ route }) => {
  const html = readPage(route);
  expect(html).toContain(`<link rel="canonical" href="${siteUrl}${route}"/>`);
  expect(html).toContain(`<meta property="og:url" content="${siteUrl}${route}"/>`);
  expect(html).toContain(`<meta property="og:image" content="${siteUrl}/og-image.jpg"/>`);
  expect(html).toContain('<meta name="twitter:card" content="summary_large_image"/>');
  expect(html).not.toContain('name="robots"');
});

test.each(['/not-found', ...Object.keys(redirects)])('keeps %s out of search results', route => {
  const html = readPage(route);
  expect(html).toContain('<meta name="robots" content="noindex"/>');
  expect(html).not.toContain('rel="canonical"');
});

test('lists every indexed page, and only those, in sitemap.xml', () => {
  const xml = readFileSync(path.join(import.meta.dirname, '../build/client/sitemap.xml'), 'utf8');
  const listed = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
  expect(listed).toEqual(indexedPaths.map(route => siteUrl + route));
  expect(listed.map(url => url.replace(siteUrl, ''))).toEqual(expect.arrayContaining(indexed.map(({ route }) => route)));
});

test('points crawlers at the sitemap', () => {
  expect(readFileSync(path.join(import.meta.dirname, '../build/client/robots.txt'), 'utf8')).toContain(`Sitemap: ${siteUrl}/sitemap.xml`);
});

test('describes Mitch as a person on the home page', () => {
  const [, json] = readPage('/').match(/<script type="application\/ld\+json">(.+?)<\/script>/)!;
  expect(JSON.parse(json)).toMatchObject({ '@type': 'Person', name: 'Mitch Lui', url: `${siteUrl}/`, sameAs: Object.values(redirects) });
});

test.each(indexed)('links from $route to pages with a trailing slash so the server never redirects', ({ route }) => {
  const internal = [...readPage(route).matchAll(/href="(\/[^"]*)"/g)].map(([, href]) => href)
    .filter(href => !/\.[a-z0-9]+$/i.test(href));
  internal.forEach(href => expect(href).toMatch(/\/$/));
});

test.each(indexed.filter(({ route }) => route === '/' || route.startsWith('/work/')))('marks the current section in the nav on $route', ({ route }) => {
  const section = route.startsWith('/work/') ? '/work/' : '/';
  expect(readPage(route)).toMatch(new RegExp(`<a [^>]*aria-current="page" href="${section}"`));
});

test.each(pages)('wraps $route in one main landmark that the skip link targets', ({ route }) => {
  const html = readPage(route);
  expect(html.match(/<main\b/g)).toHaveLength(1);
  expect(html).toContain('<main id="content" tabindex="-1">');
  expect(html.indexOf('href="#content"')).toBeLessThan(html.indexOf('<header'));
});

test.each(Object.entries(projects))('describes the %s screenshot', (_id, project) => {
  expect(project.alt).not.toMatch(/screenshot$/);
  expect(project.alt.length).toBeGreaterThan(30);
});

test.each([['/work/', 'wise'], ...Object.keys(projects).map(id => [projectHref(id), projects[id].thumbnail])])('loads the main screenshot on %s first and every other image lazily', (route, thumbnail) => {
  const images = [...readPage(route).matchAll(/<img [^>]*src="\/project-assets\/[^"]*"[^>]*>/g)].map(([tag]) => tag);
  const [first, ...rest] = images;
  expect(first).toContain(`/${thumbnail}.png`);
  expect(first).toContain('fetchPriority="high"');
  rest.forEach(tag => expect(tag).toContain('loading="lazy"'));
});

test('ships server rules that force HTTPS, serve real 404s and cache hashed assets for a year', () => {
  const rules = readFileSync(path.join(import.meta.dirname, '../build/client/.htaccess'), 'utf8');
  expect(rules).toContain('RewriteRule ^(.*)$ "https://%{HTTP_HOST}%{REQUEST_URI}" [R=301,L]');
  expect(rules).toContain('ErrorDocument 404 /not-found/index.html');
  expect(rules).not.toContain('/index.html [QSA,L]');
  expect(readFileSync(path.join(import.meta.dirname, '../build/client/assets/.htaccess'), 'utf8')).toContain('max-age=31536000, immutable');
});

const allPages = [...pages.map(({ route }) => route), ...Object.keys(redirects)];

test.each(allPages)('ships %s without any client JavaScript', route => {
  const html = readPage(route);
  expect(html.match(/<script\b(?![^>]*type="application\/ld\+json")[^>]*>/g)).toBeNull();
  expect(html).not.toContain('modulepreload');
});

test('opens the phone menu with HTML alone', () => {
  const home = readPage('/');
  expect(home).toMatch(/<dialog id="site-menu"[^>]*aria-label="Menu"/);
  expect(home).toMatch(/commandfor="site-menu" command="show-modal"/);
  expect(home).toMatch(/commandfor="site-menu" command="close"/);
});
