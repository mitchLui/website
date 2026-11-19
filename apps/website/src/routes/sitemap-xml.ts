import { indexedPaths } from '../data/links';
import { siteUrl } from '../meta/meta';

const urls = indexedPaths.map(path => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n');

export const loader = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  { headers: { 'Content-Type': 'application/xml' } }
);
