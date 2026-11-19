import { SitemapPage } from '../pages/SitemapPage/SitemapPage';
import { pageMeta } from '../meta/meta';

export const meta = () => pageMeta({
  title: 'Sitemap | Mitch Lui',
  description: 'Every page on mitchlui.dev.',
  path: '/sitemap/'
});

export default SitemapPage;
