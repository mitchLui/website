import React, { useEffect } from 'react';
import { Container } from '../../components/Container/Container';
import { LinkButton } from '../../components/Button/Button';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';
import './notfound.scss';

export function NotFoundPage (): React.ReactElement {
  useEffect(() => {
    setTitle('Not found | Mitch Lui');
    setDescription('Page not found');
    setOgProperties({
      title: 'Not found | Mitch Lui',
      description: 'Page not found'
    });
  }, []);

  return (
    <Container>
      <div className={'header-text'}>
        <h1>404 Not Found!</h1>
        <h2>You might want to go back...</h2>
        <LinkButton to={'/'} text={'Go Home'}/>
      </div>
    </Container>
  );
}
