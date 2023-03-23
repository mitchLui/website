import React, { useEffect } from 'react';
import { Container } from '../../components/Container/Container';
import { Projects } from '../../components/Projects/Projects';
import { projects } from '../../data/projects';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';

export function ProjectsPage (): React.ReactElement {
  useEffect(() => {
    setTitle('Projects | Mitch Lui');
    setDescription('Projects');
    setOgProperties({
      title: 'Projects | Mitch Lui',
      description: 'Projects'
    });
  }, []);

  return (
        <Container>
            <Projects projects={projects}/>
        </Container>
  );
}