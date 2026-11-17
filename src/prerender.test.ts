import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';
import { projects } from './data/projects';
import { companies } from './data/companies';
import { redirects } from './data/redirects';

const readPage = (route: string) =>
  readFileSync(path.join(import.meta.dirname, '../build/client', route, 'index.html'), 'utf8');

describe('prerendered HTML', () => {
  test('home page contains content and meta', () => {
    const html = readPage('/');
    expect(html).toContain('<title>Mitch Lui | Full Stack Developer</title>');
    expect(html).toContain('<meta name="description" content="mitchlui.dev"/>');
    expect(html).toContain('Senior Software Engineer');
  });

  test('sitemap page links every project', () => {
    const html = readPage('/sitemap');
    expect(html).toContain('<title>Sitemap | Mitch Lui</title>');
    Object.entries(projects).forEach(([id, project]) =>
      expect(html).toContain(`href="/${project.company}/projects/${id}"`)
    );
  });

  test.each(Object.keys(companies))('company page /%s is prerendered', company => {
    expect(readPage(`/${company}`)).toContain('Coming Soon...');
  });

  test.each(Object.entries(projects))('project page %s contains its title and meta', (id, project) => {
    const html = readPage(`/${project.company}/projects/${id}`);
    expect(html).toContain(`<title>${project.title} | Mitch Lui</title>`);
    expect(html).toContain(`>${project.title}</h1>`);
  });

  test.each(Object.entries(redirects))('%s redirects without JavaScript', (route, target) => {
    expect(readPage(route)).toContain(`<meta http-equiv="refresh" content="0; url=${target}"/>`);
  });
});
