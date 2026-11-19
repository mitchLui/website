import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { expect, test } from 'vitest';
import { featuredProjects, projects } from './data/projects';
import { redirects } from './data/redirects';
import { footerLinks, navLinks, sitemap } from './data/links';

const readPage = (route: string) =>
  readFileSync(path.join(import.meta.dirname, '../build/client', route, 'index.html'), 'utf8');

const escapeHtml = (text: string) => text.replace(/'/g, '&#x27;');

const pages = [
  {
    route: '/',
    title: 'Mitch Lui | Senior Software Engineer',
    description: 'Mitch Lui, Senior Software Engineer at Wise in London.',
    content: featuredProjects.map(([id]) => `href="/work/${id}"`)
  },
  {
    route: '/work',
    title: 'Work | Mitch Lui',
    description: 'Work at Wise and Asiabots, plus earlier university, hackathon and personal projects.',
    content: Object.keys(projects).map(id => `href="/work/${id}"`)
  },
  {
    route: '/sitemap',
    title: 'Sitemap | Mitch Lui',
    description: 'Sitemap.',
    content: Object.keys(projects).map(id => `href="/work/${id}"`)
  },
  {
    route: '/not-found',
    title: 'Not found | Mitch Lui',
    description: 'Page not found',
    content: ['>Page not found</h1>']
  },
  ...Object.entries(projects).map(([id, project]) => ({
    route: `/work/${id}`,
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
  expect(home).toContain('href="/work"');
});
