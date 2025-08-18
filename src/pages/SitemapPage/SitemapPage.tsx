import { useEffect } from 'react';
import { Sitemap } from '../../components/Sitemap/Sitemap';
import { projects } from '../../data/projects';
import { setPageProperties } from '../../meta/meta';

export const SitemapPage = () => {
  useEffect(() => {
    setPageProperties({
      title: 'Sitemap | Mitch Lui',
      description: 'Sitemap.'
    });
  }, []);

  return <Sitemap projects={projects} />;
};
