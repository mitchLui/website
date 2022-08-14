import React, { useEffect } from 'react';
import { Container } from '../../components/Container/Container';
import { Sitemap } from '../../components/Sitemap/Sitemap';
import { projects } from '../../data/projects';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';

export function SitemapPage (): React.ReactElement {
  useEffect(() => {
    setTitle('Sitemap | Mitch Lui');
    setDescription('Sitemap');
    setOgProperties({
      title: 'Sitemap | Mitch Lui',
      description: 'Sitemap.'
    });
  }, []);

  return (
        <Container>
            <Sitemap projects={projects} />
        </Container>
  );
}
