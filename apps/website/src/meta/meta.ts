import type { MetaDescriptor } from 'react-router';
import { redirects } from '../data/redirects';
import { rolesFor } from '../data/roles';

export const siteUrl = 'https://mitchlui.dev';

type PageMeta = {
  title: string;
  description: string;
};

export const pageMeta = ({ title, description, path }: PageMeta & { path: string }): MetaDescriptor[] => [
  { title },
  { name: 'description', content: description },
  { tagName: 'link', rel: 'canonical', href: siteUrl + path },
  { property: 'og:type', content: 'website' },
  { property: 'og:site_name', content: 'Mitch Lui' },
  { property: 'og:url', content: siteUrl + path },
  { property: 'og:title', content: title },
  { property: 'og:description', content: description },
  { property: 'og:image', content: `${siteUrl}/og-image.jpg` },
  { name: 'twitter:card', content: 'summary_large_image' }
];

export const unlistedPageMeta = ({ title, description }: PageMeta): MetaDescriptor[] => [
  { title },
  { name: 'description', content: description },
  { name: 'robots', content: 'noindex' }
];

export const notFoundMeta = () => unlistedPageMeta({ title: 'Not found | Mitch Lui', description: 'Page not found' });

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mitch Lui',
  url: `${siteUrl}/`,
  jobTitle: rolesFor('wise')[0].title,
  worksFor: { '@type': 'Organization', name: 'Wise', url: 'https://wise.com' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Bristol' },
  sameAs: Object.values(redirects)
};
