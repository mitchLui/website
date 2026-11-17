import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';
import { featuredProjects, projects } from './data/projects';
import { redirects } from './data/redirects';

const readPage = (route: string) =>
  readFileSync(path.join(import.meta.dirname, '../build/client', route, 'index.html'), 'utf8');

const escapeHtml = (text: string) => text.replace(/'/g, '&#x27;');

describe('prerendered home page', () => {
  const html = readPage('/');

  test('renders the title and description meta', () => {
    expect(html).toContain('<title>Mitch Lui | Senior Software Engineer</title>');
    expect(html).toContain('<meta name="description" content="Mitch Lui, Senior Software Engineer at Wise in London."/>');
  });

  test('renders the intro', () => {
    expect(html).toContain('I&#x27;m a Senior Software Engineer on');
  });

  test('renders the Recent work heading', () => {
    expect(html).toContain('>Recent work</h2>');
  });

  test.each(featuredProjects)('renders a card for featured project %s linking to its page', (id, project) => {
    expect(html).toContain(`>${project.title}</h2>`);
    expect(html).toContain(`href="/work/${id}"`);
  });

  test('renders a See all work action linking to the work page', () => {
    expect(html).toMatch(/href="\/work"[^>]*>See all work<\/a>/);
  });
});

describe('prerendered work page', () => {
  const html = readPage('/work');

  test('renders the title meta', () => {
    expect(html).toContain('<title>Work | Mitch Lui</title>');
  });

  test.each(Object.keys(projects))('renders a link to project %s', id => {
    expect(html).toContain(`href="/work/${id}"`);
  });

  test('renders the Earlier projects heading', () => {
    expect(html).toContain('>Earlier projects</h2>');
  });

  test('renders awards but not grades for earlier projects', () => {
    expect(html).toContain('Overall best prize');
    expect(html).not.toContain('First class');
  });
});

describe('prerendered project pages', () => {
  test.each(Object.entries(projects))('renders the title, heading and description meta for %s', (id, project) => {
    const html = readPage(`/work/${id}`);
    expect(html).toContain(`<title>${project.title} | Mitch Lui</title>`);
    expect(html).toContain(`>${project.title}</h1>`);
    expect(html).toContain(`<meta name="description" content="${escapeHtml(project.headline)}"/>`);
  });
});

describe('prerendered sitemap page', () => {
  test('renders a link to every project page', () => {
    const html = readPage('/sitemap');
    Object.keys(projects).forEach(id => expect(html).toContain(`href="/work/${id}"`));
  });
});

describe('prerendered not found page', () => {
  test('renders the Page not found heading and a Go home action', () => {
    const html = readPage('/not-found');
    expect(html).toContain('>Page not found</h1>');
    expect(html).toMatch(/href="\/"[^>]*>Go home<\/a>/);
  });
});

describe('prerendered redirects', () => {
  test.each(Object.entries(redirects))('%s renders a meta refresh to its target', (route, target) => {
    expect(readPage(route)).toContain(`<meta http-equiv="refresh" content="0; url=${target}"/>`);
  });
});
