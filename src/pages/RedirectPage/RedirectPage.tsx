import React, { useEffect } from 'react';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';

export function RedirectPage ({ redirect } : {redirect: string}): React.ReactElement {
  useEffect(() => {
    window.location.assign(redirect);
  }, [redirect]);

  useEffect(() => {
    setTitle('Redirecting... | Mitch Lui');
    setDescription('Redirecting...');
    setOgProperties({
      title: 'Redirecting... | Mitch Lui',
      description: 'Redirecting...'
    });
  }, []);

  return <h1>Redirecting...</h1>;
}
