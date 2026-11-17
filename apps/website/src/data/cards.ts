import type { ArchiveEntry, FeaturedProjectProps, Image, ProjectCardProps } from '@mitchlui/components';
import { Project, ProfessionalProject } from './projects';
import { rolesFor } from './roles';
import { formatMonth, formatPeriod } from './dates';

const kindLabels: Record<Project['kind'], string> = {
  professional: 'Professional',
  academic: 'Academic',
  hackathon: 'Hackathon',
  personal: 'Personal'
};

export const imageFor = (project: Project): Image => ({
  src: `/project-assets/png/${project.thumbnail}.png`,
  webpSrc: `/project-assets/webp/${project.thumbnail}.webp`,
  alt: project.alt
});

export const toFeaturedProject = (id: string, project: ProfessionalProject): FeaturedProjectProps => {
  const roles = rolesFor(id);
  const itemsPerRole = roles.length === 1 ? Infinity : 1;
  return {
    title: project.title,
    headline: project.headline,
    href: `/work/${id}`,
    image: imageFor(project),
    period: formatPeriod(project.started, project.ended),
    highlights: roles.map(role => ({
      label: role.level,
      period: formatPeriod(role.started, role.ended),
      items: role.impact.slice(0, itemsPerRole)
    }))
  };
};

export const toProjectCard = (id: string, project: Project): ProjectCardProps => ({
  title: project.title,
  headline: project.headline,
  href: `/work/${id}`,
  image: imageFor(project),
  highlights: project.kind === 'professional' ? rolesFor(id)[0]?.impact : undefined,
  codeUrl: project.git_url
});

export const toArchiveEntry = (id: string, project: Project): ArchiveEntry => ({
  title: project.title,
  href: `/work/${id}`,
  meta: [kindLabels[project.kind], formatMonth(project.started), ...(project.awards ?? [])].join(' · ')
});
