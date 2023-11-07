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
      <h1>To my Standing Goose:</h1>
      <p>Thanks for being there for me whenever I need you. I love you! &lt;3</p>
      <img src={'/images/standing-goose.jpeg'} alt={'penguin-plushie-patting-dog-plushie'} width={300}/>
    </Container>
  );
}
