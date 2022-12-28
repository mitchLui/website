import React, { useEffect } from 'react';
import { Container } from '../../components/Container/Container';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';

export function Derrianne (): React.ReactElement {
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
            <h1> I love you Derrianne!</h1>
        </div>
    </Container>
  );
}