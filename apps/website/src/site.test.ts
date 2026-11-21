import { createServer, Server } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import axe from 'axe-core';
import { Browser, BrowserContextOptions, chromium, Page } from 'playwright';
import { redirects } from './data/redirects';
import { siteUrl } from './meta/meta';

const client = path.join(import.meta.dirname, '../build/client');
const contentTypes: Record<string, string> = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp'
};

let server: Server;
let browser: Browser;
let origin: string;
const site = new Map<string, string>();

const serveBuild = () => createServer(async (request, response) => {
  let file = path.join(client, decodeURIComponent(new URL(request.url!, 'http://localhost').pathname));
  try {
    if ((await stat(file)).isDirectory()) {
      file = path.join(file, 'index.html');
    }
    response.writeHead(200, { 'content-type': contentTypes[path.extname(file)] ?? 'application/octet-stream' }).end(await readFile(file));
  } catch {
    response.writeHead(404).end();
  }
});

const linksIn = (html: string) => [...html.matchAll(/(?:href|src)="(\/[^"#?]*)"/g)].map(([, href]) => href);

const crawl = async (start: string) => {
  const queue = [start];
  while (queue.length > 0) {
    const route = queue.shift()!;
    if (site.has(route)) {
      continue;
    }
    const response = await fetch(origin + route);
    expect(response.status, `${route} should resolve`).toBe(200);
    const isHtml = response.headers.get('content-type') === 'text/html';
    site.set(route, isHtml ? await response.text() : '');
    if (isHtml) {
      queue.push(...linksIn(site.get(route)!));
    }
  }
};

const htmlPages = () => [...site].filter(([route]) => !path.extname(route));
const isUnlisted = (html: string) => html.includes('<meta name="robots" content="noindex"/>');
const indexedPages = () => htmlPages().filter(([, html]) => !isUnlisted(html));
const metaContent = (html: string, attribute: string) => html.match(new RegExp(`<meta ${attribute} content="([^"]*)"`))?.[1];

beforeAll(async () => {
  server = serveBuild().listen(0);
  origin = `http://localhost:${(server.address() as { port: number }).port}`;
  browser = await chromium.launch();
  await crawl('/');
  await crawl('/not-found/');
  await Promise.all(Object.keys(redirects).map(route => crawl(`${route}/`)));
});

afterAll(async () => {
  await browser.close();
  server.close();
});

const openPage = async (route: string, options: BrowserContextOptions = {}): Promise<Page> => {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce', ...options });
  await page.goto(origin + route, { waitUntil: 'networkidle' });
  return page;
};

describe('crawling the built site', () => {
  test('reaches every page, stylesheet and image it links to', () => {
    expect(indexedPages().length).toBeGreaterThan(15);
  });

  test('links between pages with a trailing slash, so the server never redirects', () => {
    htmlPages().forEach(([route, html]) =>
      linksIn(html).filter(href => !path.extname(href)).forEach(href => expect(href, `link on ${route}`).toMatch(/\/$/)));
  });

  test('lists exactly the indexed pages in sitemap.xml', async () => {
    const xml = await (await fetch(`${origin}/sitemap.xml`)).text();
    const listed = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url.replace(siteUrl, '')).sort();
    expect(listed).toEqual(indexedPages().map(([route]) => route).sort());
  });

  test('points crawlers at the sitemap', async () => {
    expect(await (await fetch(`${origin}/robots.txt`)).text()).toContain(`Sitemap: ${siteUrl}/sitemap.xml`);
  });

  test('gives every indexed page its own title, a sentence-cased description and absolute share tags', () => {
    const titles = indexedPages().map(([route, html]) => {
      expect(metaContent(html, 'name="description"'), route).toMatch(/\.$/);
      expect(html, route).toContain(`<link rel="canonical" href="${siteUrl}${route}"/>`);
      expect(metaContent(html, 'property="og:url"'), route).toBe(siteUrl + route);
      const card = route.startsWith('/work/') && route !== '/work/' ? `/share/${route.split('/')[2]}.jpg` : '/og-image.jpg';
      expect(metaContent(html, 'property="og:image"'), route).toBe(siteUrl + card);
      return html.match(/<title>([^<]+)<\/title>/)![1];
    });
    expect(new Set(titles).size).toBe(titles.length);
  });

  test('keeps the not-found and redirect pages out of search results', () => {
    expect(isUnlisted(site.get('/not-found/')!)).toBe(true);
    Object.entries(redirects).forEach(([route, target]) => {
      const html = site.get(`${route}/`)!;
      expect(isUnlisted(html)).toBe(true);
      expect(html).toContain(`<meta http-equiv="refresh" content="0; url=${target}"/>`);
    });
  });

  test('describes Mitch as a person on the home page', () => {
    const [, json] = site.get('/')!.match(/<script type="application\/ld\+json">(.+?)<\/script>/)!;
    expect(JSON.parse(json)).toMatchObject({ '@type': 'Person', name: 'Mitch Lui', url: `${siteUrl}/`, sameAs: Object.values(redirects) });
  });

  test('shares a 1200 by 630 card from every indexed page and names the web app Mitch Lui', async () => {
    const cards = new Set(indexedPages().map(([, html]) => metaContent(html, 'property="og:image"')!.replace(siteUrl, '')));
    expect(cards.size).toBeGreaterThan(10);
    for (const card of cards) {
      const response = await fetch(origin + card);
      expect(response.status, card).toBe(200);
      const image = Buffer.from(await response.arrayBuffer());
      const frame = image.indexOf(Buffer.from([0xFF, 0xC0]));
      expect({ card, width: image.readUInt16BE(frame + 7), height: image.readUInt16BE(frame + 5) }).toEqual({ card, width: 1200, height: 630 });
    }
    expect(await (await fetch(`${origin}/manifest.json`)).json()).toMatchObject({ name: 'Mitch Lui', theme_color: '#F7F5EF' });
  });

  test('ships server rules that force HTTPS, serve real 404s and cache hashed assets for a year', async () => {
    const rules = await readFile(path.join(client, '.htaccess'), 'utf8');
    expect(rules).toContain('RewriteRule ^(.*)$ "https://%{HTTP_HOST}%{REQUEST_URI}" [R=301,L]');
    expect(rules).toContain('ErrorDocument 404 /not-found/index.html');
    expect(await readFile(path.join(client, 'assets/.htaccess'), 'utf8')).toContain('max-age=31536000, immutable');
  });
});

describe('visiting the site in a browser', () => {
  const themes = ['light', 'dark'] as const;
  const widths = [1280, 390];

  test('passes an axe scan on every page in both themes on desktop and phone', async () => {
    for (const colorScheme of themes) {
      for (const width of widths) {
        const context = await browser.newContext({ viewport: { width, height: 900 }, colorScheme, reducedMotion: 'reduce' });
        const page = await context.newPage();
        for (const [route] of [...indexedPages(), ['/not-found/']]) {
          await page.goto(origin + route, { waitUntil: 'networkidle' });
          await page.addScriptTag({ content: axe.source });
          const violations = await page.evaluate(async () =>
            (await (window as unknown as { axe: { run: () => Promise<{ violations: { id: string }[] }> } }).axe.run()).violations.map(({ id }) => id));
          expect(violations, `${route} in ${colorScheme} at ${width}px`).toEqual([]);
        }
        await context.close();
      }
    }
  }, 180_000);

  test('marks the current section in the nav', async () => {
    const page = await openPage('/work/hpc/');
    await expect(page.locator('header').getByRole('link', { name: 'Work' }).getAttribute('aria-current')).resolves.toBe('page');
    await expect(page.locator('header').getByRole('link', { name: 'Home' }).getAttribute('aria-current')).resolves.toBeNull();
    await page.close();
  });

  test('shows every project screenshot at 16:10 with no transparent edges', async () => {
    const page = await openPage('/');
    const screenshots = [...new Set(htmlPages().flatMap(([, html]) => linksIn(html).filter(href => href.startsWith('/project-assets/png/'))))];
    const checks = await page.evaluate(sources => Promise.all(sources.map(source => new Promise<{ source: string; ratio: string; corners: number[] }>(resolve => {
      const image = new Image();
      image.onload = () => {
        const canvas = Object.assign(document.createElement('canvas'), { width: image.naturalWidth, height: image.naturalHeight });
        const context = canvas.getContext('2d')!;
        context.drawImage(image, 0, 0);
        const corners = [[0, 0], [image.naturalWidth - 1, 0], [0, image.naturalHeight - 1], [image.naturalWidth - 1, image.naturalHeight - 1]]
          .map(([x, y]) => context.getImageData(x, y, 1, 1).data[3]);
        resolve({ source, ratio: (image.naturalWidth / image.naturalHeight).toFixed(2), corners });
      };
      image.src = source;
    }))), screenshots);
    expect(checks.length).toBeGreaterThan(10);
    checks.forEach(check => expect(check).toEqual({ source: check.source, ratio: check.source.endsWith('/wise.png') ? (2948 / 1880).toFixed(2) : '1.60', corners: [255, 255, 255, 255] }));
    await page.close();
  });

  test('lines up the card titles across the Work page row', async () => {
    const page = await openPage('/work/');
    const tops = await page.locator('article h2').evaluateAll(titles => titles.map(title => Math.round(title.getBoundingClientRect().top)));
    expect(tops.length).toBeGreaterThan(1);
    expect(new Set(tops).size).toBe(1);
    await page.close();
  });

  test('tells screen readers about every link that opens a new tab', async () => {
    for (const route of ['/', '/work/', '/work/mask-detector/']) {
      const page = await openPage(route);
      const names = await page.locator('a[target="_blank"]').evaluateAll(links => links.map(link => link.textContent));
      expect(names.length, route).toBeGreaterThan(0);
      names.forEach(name => expect(name, route).toMatch(/opens in a new tab\)$/));
      await page.close();
    }
  });

  test('skips to the page content from the first Tab', async () => {
    const page = await openPage('/work/');
    await page.keyboard.press('Tab');
    await expect(page.evaluate(() => document.activeElement?.textContent)).resolves.toBe('Skip to content');
    await page.keyboard.press('Enter');
    await expect(page.evaluate(() => document.activeElement?.tagName)).resolves.toBe('MAIN');
    await page.close();
  });

  test('keeps Tab inside the open phone menu and closes it with Escape', async () => {
    const page = await openPage('/work/', { viewport: { width: 390, height: 844 } });
    await page.getByRole('button', { name: 'Open menu' }).click();
    const menuLink = page.locator('header').getByRole('link', { name: 'LinkedIn' }).last();
    await expect(menuLink.isVisible()).resolves.toBe(true);
    for (let press = 0; press < 8; press++) {
      await page.keyboard.press('Tab');
      await expect(page.evaluate(() => Boolean(document.activeElement?.closest('main, footer'))), `Tab ${press + 1}`).resolves.toBe(false);
    }
    await page.keyboard.press('Escape');
    await expect.poll(() => menuLink.isVisible()).toBe(false);
    await expect(page.evaluate(() => document.activeElement?.getAttribute('aria-label'))).resolves.toBe('Open menu');
    await page.close();
  });
});
