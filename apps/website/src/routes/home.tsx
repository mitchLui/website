import { HomePage } from '../pages/HomePage/HomePage';
import { pageMeta, personSchema } from '../meta/meta';

export const meta = () => [
  ...pageMeta({
    title: 'Mitch Lui | Senior Software Engineer',
    description: 'Mitch Lui, Senior Software Engineer at Wise in London.',
    path: '/'
  }),
  { 'script:ld+json': personSchema }
];

export default HomePage;
