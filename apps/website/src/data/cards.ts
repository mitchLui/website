import type { ArchiveEntry, FeaturedProjectProps, Image, ProjectCardProps } from '@mitchlui/components';
import { Project, ProfessionalProject } from './projects';
import { rolesFor } from './roles';
import { formatMonth, formatPeriod } from './dates';

const kindTags: Record<Project['kind'], NonNullable<ArchiveEntry['tag']>> = {
  professional: { label: 'Professional', color: 'green' },
  academic: { label: 'Academic', color: 'blue' },
  hackathon: { label: 'Hackathon', color: 'orange' },
  personal: { label: 'Personal', color: 'olive' }
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
  meta: [formatMonth(project.started), ...(project.awards ?? [])].join(' · '),
  tag: kindTags[project.kind]
});
