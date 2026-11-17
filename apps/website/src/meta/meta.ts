import type { MetaDescriptor } from 'react-router';

type PageMeta = {
  title: string;
  description: string;
};

export const pageMeta = ({ title, description }: PageMeta): MetaDescriptor[] => [
  { title },
  { name: 'description', content: description },
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
  { property: 'og:image', content: '/og-image.jpg' }
];
