import { type RouteConfig, index, route } from '@react-router/dev/routes';
import { redirects } from './data/redirects';

export default [
  index('routes/home.tsx'),
  route('work', 'routes/work.tsx'),
  route('work/:projectId', 'routes/project.tsx'),
  route('sitemap', 'routes/sitemap.tsx'),
  route('not-found', 'routes/not-found.tsx', { id: 'not-found' }),
  ...Object.keys(redirects).map(path => route(path.slice(1), 'routes/redirect.tsx', { id: path })),
  route('*', 'routes/not-found.tsx', { id: 'catch-all' })
] satisfies RouteConfig;
