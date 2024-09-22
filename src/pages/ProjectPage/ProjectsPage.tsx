import { ReactElement, useEffect } from 'react';
import { Projects } from '../../components/Projects/Projects';
import { projects } from '../../data/projects';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';

export function ProjectsPage (): ReactElement {
  useEffect(() => {
    setTitle('Projects | Mitch Lui');
    setDescription('Projects');
    setOgProperties({
      title: 'Projects | Mitch Lui',
      description: 'Projects'
    });
  }, []);

  return <Projects projects={projects}/>;
}
