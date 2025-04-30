import { useEffect } from 'react';
import { Sitemap } from '../../components/Sitemap/Sitemap';
import { projects } from '../../data/projects';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';

export const SitemapPage = () => {
  useEffect(() => {
    setTitle('Sitemap | Mitch Lui');
    setDescription('Sitemap');
    setOgProperties({
      title: 'Sitemap | Mitch Lui',
      description: 'Sitemap.'
    });
  }, []);

  return <Sitemap projects={projects} />;
};
