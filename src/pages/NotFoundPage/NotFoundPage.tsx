import { useEffect } from 'react';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';
import './NotFoundPage.scss';
import { Button } from '../../components/Button/Button';

export const NotFoundPage = () => {
  useEffect(() => {
    setTitle('Not found | Mitch Lui');
    setDescription('Page not found');
    setOgProperties({
      title: 'Not found | Mitch Lui',
      description: 'Page not found'
    });
  }, []);

  return (
    <div className={'header-text'}>
      <h1>404 Not Found!</h1>
      <h2>You might want to go back...</h2>
      <Button as="a" style={{ marginBottom: '1rem' }} to={'/'}>Go back</Button>
    </div>
  );
};
