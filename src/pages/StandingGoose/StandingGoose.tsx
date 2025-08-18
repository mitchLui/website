import { useEffect } from 'react';
import { setPageProperties } from '../../meta/meta';

export const StandingGoose = () => {
  useEffect(() => {
    setPageProperties({
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
};
