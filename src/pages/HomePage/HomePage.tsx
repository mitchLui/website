import { ReactElement, useEffect } from 'react';
import { Intro } from '../../components/Intro/Intro';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';
import { Projects } from '../../components/Projects/Projects';
import { projects } from '../../data/projects';

export function HomePage (): ReactElement {
  useEffect(() => {
    setTitle('Mitch Lui | Full Stack Developer');
    setDescription('mitchlui.dev');
    setOgProperties({
      title: 'Mitch Lui | Full Stack Developer',
      description: 'mitchlui.dev'
    });
  }, []);

  return (
    <div className={'fade-in'}>
      <div style={{ marginBottom: '64px' }}>
        <Intro/>
        <Projects projects={projects} />
      </div>
    </div>
  );
}
