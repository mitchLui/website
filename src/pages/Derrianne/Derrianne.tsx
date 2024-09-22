import { ReactElement, useEffect } from 'react';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';

export function Derrianne (): ReactElement {
  useEffect(() => {
    setTitle('Mitch Lui | Full Stack Developer');
    setDescription('mitchlui.dev');
    setOgProperties({
      title: 'Mitch Lui | Full Stack Developer',
      description: 'mitchlui.dev'
    });
  }, []);

  return (
    <>
      <h1>To my Standing Goose:</h1>
      <p>Thanks for being there for me whenever I need you. I love you! &lt;3</p>
      <img src={'/images/standing-goose.jpeg'} alt={'penguin-plushie-patting-dog-plushie'} width={300}/>
    </>
  );
}
