import { createServer, Server } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { afterAll, beforeAll, expect, test } from 'vitest';
import { Browser, chromium, Page } from 'playwright';

const client = path.join(import.meta.dirname, '../build/client');
let server: Server;
let browser: Browser;
let origin: string;

const serveBuild = () => createServer(async (request, response) => {
  let file = path.join(client, decodeURIComponent(new URL(request.url!, 'http://localhost').pathname));
  try {
    if ((await stat(file)).isDirectory()) {
      file = path.join(file, 'index.html');
    }
    response.writeHead(200, file.endsWith('.html') ? { 'content-type': 'text/html' } : {}).end(await readFile(file));
  } catch {
    response.writeHead(404).end();
  }
});

beforeAll(async () => {
  server = serveBuild().listen(0);
  origin = `http://localhost:${(server.address() as { port: number }).port}`;
  browser = await chromium.launch();
});

afterAll(async () => {
  await browser.close();
  server.close();
});

const openPhonePage = async (route: string): Promise<Page> => {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, javaScriptEnabled: false });
  await page.goto(origin + route);
  return page;
};

const focusIsBehindMenu = (page: Page) => page.evaluate(() =>
  document.activeElement !== document.body && !document.activeElement?.closest('dialog'));

test('opens the phone menu, keeps Tab inside it and closes it with Escape, all without JavaScript', async () => {
  const page = await openPhonePage('/work/');
  const menu = page.getByRole('dialog', { name: 'Menu' });
  await expect(menu.isVisible()).resolves.toBe(false);

  await page.getByRole('button', { name: 'Open menu' }).click();
  await expect(menu.isVisible()).resolves.toBe(true);
  await expect(menu.getByRole('link', { name: 'Work' }).getAttribute('aria-current')).resolves.toBe('page');
  for (let press = 0; press < 8; press++) {
    await page.keyboard.press('Tab');
    await expect(focusIsBehindMenu(page)).resolves.toBe(false);
  }

  await page.keyboard.press('Escape');
  await expect(menu.isVisible()).resolves.toBe(false);
  await expect(page.evaluate(() => document.activeElement?.getAttribute('aria-label'))).resolves.toBe('Open menu');
  await page.close();
}, 30_000);

test('closes the phone menu with its close button and follows its links without JavaScript', async () => {
  const page = await openPhonePage('/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.getByRole('button', { name: 'Close menu' }).click();
  await expect(page.getByRole('dialog', { name: 'Menu' }).isVisible()).resolves.toBe(false);

  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.getByRole('dialog', { name: 'Menu' }).getByRole('link', { name: 'Work' }).click();
  await page.waitForURL(`${origin}/work/`);
  await expect(page.title()).resolves.toBe('Work | Mitch Lui');
  await page.close();
}, 30_000);

test('prefetches a same-site page when its link is hovered', async () => {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const prefetched: string[] = [];
  page.on('request', request => {
    if (request.headers()['sec-purpose']?.includes('prefetch')) {
      prefetched.push(new URL(request.url()).pathname);
    }
  });
  await page.goto(origin + '/', { waitUntil: 'networkidle' });
  await page.locator('header').getByRole('link', { name: 'Work' }).hover();
  await expect.poll(() => prefetched, { timeout: 5_000 }).toContain('/work/');
  await page.close();
}, 30_000);
