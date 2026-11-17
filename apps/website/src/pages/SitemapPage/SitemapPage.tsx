import { Sitemap } from '../../components/Sitemap/Sitemap';
import { projects } from '../../data/projects';

export const SitemapPage = () => {
  return <Sitemap projects={projects} />;
};
