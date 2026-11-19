import type { ArchiveEntry, Image, ProjectCardProps } from '@mitchlui/components';
import { Project } from './projects';
import { rolesFor } from './roles';
import { formatMonth } from './dates';
import { projectHref } from './links';

export const kindTags: Record<Project['kind'], NonNullable<ArchiveEntry['tag']>> = {
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

export const toProjectCard = (id: string, project: Project): ProjectCardProps => ({
  title: project.title,
  headline: project.headline,
  href: projectHref(id),
  image: imageFor(project),
  highlights: project.kind === 'professional' ? rolesFor(id)[0]?.impact : undefined,
  codeUrl: project.git_url
});

export const toArchiveEntry = (id: string, project: Project): ArchiveEntry => ({
  title: project.title,
  href: projectHref(id),
  date: formatMonth(project.started),
  ...(project.awards && { note: project.awards.join(' · ') }),
  tag: kindTags[project.kind]
});
