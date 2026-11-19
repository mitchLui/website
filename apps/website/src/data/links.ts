import type { NavLink } from '@mitchlui/components';

const links = {
  home: { label: 'Home', href: '/' },
  work: { label: 'Work', href: '/work' },
  cv: { label: 'CV', href: '/cv.pdf', external: true },
  linkedin: { label: 'LinkedIn', href: '/linkedin' },
  github: { label: 'GitHub', href: '/github' },
  sitemap: { label: 'Sitemap', href: '/sitemap' }
} satisfies Record<string, NavLink>;

export const navLinks: NavLink[] = [links.home, links.work, links.cv, links.linkedin];

export const footerLinks: NavLink[] = [links.work, links.cv, links.linkedin, links.github, links.sitemap];

export const sitemap = { home: links.home, work: links.work, pages: [links.cv, links.sitemap, links.linkedin, links.github] };
