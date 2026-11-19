import { useLocation } from 'react-router';
import { RedirectPage } from '../pages/RedirectPage/RedirectPage';
import { redirectFor } from '../data/redirects';
import { unlistedPageMeta } from '../meta/meta';
import type { Route } from './+types/redirect';

export const meta = ({ location }: Route.MetaArgs) => [
  ...unlistedPageMeta({ title: 'Redirecting... | Mitch Lui', description: 'Redirecting...' }),
  { httpEquiv: 'refresh', content: `0; url=${redirectFor(location.pathname)}` }
];

export default function Redirect() {
  const { pathname } = useLocation();
  return <RedirectPage redirect={redirectFor(pathname) ?? '/not-found/'}/>;
}
