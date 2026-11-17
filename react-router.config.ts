import type { Config } from '@react-router/dev/config';
import { companies } from './src/data/companies';
import { projects } from './src/data/projects';
import { redirects } from './src/data/redirects';

export default {
  appDirectory: 'src',
  buildDirectory: 'build',
  ssr: false,
  prerender: [
    '/',
    '/sitemap',
    '/not-found',
    ...Object.keys(redirects),
    ...Object.keys(companies).map(company => `/${company}`),
    ...Object.entries(projects).map(([id, project]) => `/${project.company}/projects/${id}`)
  ]
} satisfies Config;
