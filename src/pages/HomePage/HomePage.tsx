import { ReactElement, useEffect } from 'react';
import { Contact } from '../../components/Contact/Contact';
import { Intro } from '../../components/Intro/Intro';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';

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
      <Intro/>
      <Contact/>
    </div>
  );
}
