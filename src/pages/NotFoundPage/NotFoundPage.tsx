import { useEffect } from 'react';
import { setPageProperties } from '../../meta/meta';
import './NotFoundPage.scss';
import { Button } from '../../components/Button/Button';

export const NotFoundPage = () => {
  useEffect(() => {
    setPageProperties({
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
