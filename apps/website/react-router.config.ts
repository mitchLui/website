import type { Config } from '@react-router/dev/config';
import { projects } from './src/data/projects';
import { redirects } from './src/data/redirects';

export default {
  appDirectory: 'src',
  buildDirectory: 'build',
  ssr: false,
  prerender: [
    '/',
    '/work',
    '/sitemap',
    '/sitemap.xml',
    '/not-found',
    ...Object.keys(redirects),
    ...Object.keys(projects).map(id => `/work/${id}`)
  ]
} satisfies Config;
