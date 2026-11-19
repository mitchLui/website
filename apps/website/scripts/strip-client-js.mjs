import { readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const client = path.join(import.meta.dirname, '../build/client');

const htmlFiles = async directory => (await readdir(directory, { recursive: true }))
  .filter(file => file.endsWith('.html'))
  .map(file => path.join(directory, file));

const withoutClientJs = html => html
  .replace(/<script\b(?![^>]*type="application\/ld\+json")[^>]*>[\s\S]*?<\/script>/g, '')
  .replace(/<link rel="modulepreload"[^>]*\/>/g, '');

await rm(path.join(client, '__spa-fallback.html'), { force: true });
for (const file of await htmlFiles(client)) {
  await writeFile(file, withoutClientJs(await readFile(file, 'utf8')));
}
