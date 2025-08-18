import { useEffect } from 'react';
import { setPageProperties } from '../../meta/meta';

export const RedirectPage = ({ redirect } : {redirect: string}) => {
  useEffect(() => {
    window.location.assign(redirect);
  }, [redirect]);

  useEffect(() => {
    setPageProperties({
      title: 'Redirecting... | Mitch Lui',
      description: 'Redirecting...'
    });
  }, []);

  return <h1>Redirecting...</h1>;
};
