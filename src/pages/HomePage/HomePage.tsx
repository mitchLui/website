import React, { useEffect } from 'react';
import { Contact } from '../../components/Contact/Contact';
import { Container } from '../../components/Container/Container';
import { Intro } from '../../components/Intro/Intro';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';

export function HomePage (): React.ReactElement {
  useEffect(() => {
    setTitle('Mitch Lui | Full Stack Developer');
    setDescription('mitchlui.dev');
    setOgProperties({
      title: 'Mitch Lui | Full Stack Developer',
      description: 'mitchlui.dev'
    });
  }, []);

  return (
    <Container>
      <div className={'fade-in'}>
        <Intro/>
        <Contact/>
      </div>
    </Container>
  );
}
