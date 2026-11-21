import type { NavLink } from '@mitchlui/components';
import { projects } from './projects';
import { redirects } from './redirects';

const links = {
  home: { label: 'Home', href: '/' },
  work: { label: 'Work', href: '/work/' },
  cv: { label: 'CV', href: '/cv.pdf', external: true, format: 'PDF' },
  linkedin: { label: 'LinkedIn', href: redirects['/linkedin'] },
  github: { label: 'GitHub', href: redirects['/github'] },
  linkedinShortcut: { label: 'LinkedIn', href: '/linkedin/' },
  githubShortcut: { label: 'GitHub', href: '/github/' },
  sitemap: { label: 'Sitemap', href: '/sitemap/' }
} satisfies Record<string, NavLink>;

export const projectHref = (id: string) => `/work/${id}/`;

export const navLinks: NavLink[] = [links.home, links.work, links.cv, links.linkedin];

export const footerLinks: NavLink[] = [links.work, links.cv, links.linkedin, links.github, links.sitemap];

export const sitemap = { home: links.home, work: links.work, pages: [links.cv, links.sitemap, links.linkedinShortcut, links.githubShortcut] };

export const indexedPaths = [links.home.href, links.work.href, ...Object.keys(projects).map(projectHref), links.sitemap.href];
