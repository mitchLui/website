import { useEffect } from 'react';

export const RedirectPage = ({ redirect } : { redirect: string }) => {
  useEffect(() => {
    window.location.assign(redirect);
  }, [redirect]);

  return <h1>Redirecting...</h1>;
};
