import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { createServer } from 'vite';
import { chromium } from 'playwright';

const app = path.join(import.meta.dirname, '..');
const client = path.join(app, 'build/client');
const fileUrl = async (file, type) => `data:${type};base64,${(await readFile(file)).toString('base64')}`;

const vite = await createServer({ root: app, configFile: false, appType: 'custom', server: { middlewareMode: true }, logLevel: 'error' });
const { shareCards } = await vite.ssrLoadModule('/src/data/shareCards.ts');
await vite.close();

const tokens = await readFile(path.join(app, '../../packages/components/src/styles/tokens.css'), 'utf8');
const font = await fileUrl(path.join(app, '../../packages/components/node_modules/@fontsource-variable/familjen-grotesk/files/familjen-grotesk-latin-wght-normal.woff2'), 'font/woff2');
const avatar = await fileUrl(path.join(client, 'logo192.png'), 'image/png');
const template = await readFile(path.join(import.meta.dirname, 'share-card.html'), 'utf8');

const escape = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, colorScheme: 'light' });
await mkdir(path.join(client, 'share'), { recursive: true });
for (const card of shareCards()) {
  await page.setContent(template
    .replace('/* tokens */', tokens)
    .replaceAll('{{font}}', font)
    .replaceAll('{{avatar}}', avatar)
    .replaceAll('{{line}}', card.line)
    .replaceAll('{{eyebrow}}', escape(card.eyebrow))
    .replaceAll('{{title}}', escape(card.title))
    .replaceAll('{{screenshot}}', await fileUrl(path.join(client, card.screenshot), 'image/png')));
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(client, card.path), type: 'jpeg', quality: 85 });
}
await browser.close();
