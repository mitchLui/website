import type { LineColor, ProjectTileProps } from '@mitchlui/components';
import { ProfessionalProject, Project, archivedProjects, projects } from './projects';
import { kindTags } from './cards';
import { formatMonth } from './dates';

export const lineFor = (id: string, project: Project): LineColor => {
  if (id === 'wise') {
    return 'wise';
  }
  return project.kind === 'professional' ? 'early' : 'education';
};

const newestFirst = Object.entries(projects).sort(([, a], [, b]) => b.started.localeCompare(a.started));

export const previousProject = (id: string): [string, Project] | undefined =>
  newestFirst[newestFirst.findIndex(([entryId]) => entryId === id) + 1];

export const internships = newestFirst.filter((entry): entry is [string, ProfessionalProject] =>
  entry[1].kind === 'professional' && entry[0] !== 'wise');

const highlighted = newestFirst.filter(([, project]) => project.highlight);

export const educationTiles: ProjectTileProps[] = [
  ...highlighted.map(([id, project]) => ({
    href: `/work/${id}`,
    eyebrow: `${kindTags[project.kind].label} · ${formatMonth(project.started)}`,
    title: project.title,
    detail: project.awards?.[0] ?? project.technologies.join(', ')
  })),
  { href: '/work', eyebrow: `And ${archivedProjects.length - highlighted.length} more`, title: 'All projects', more: true }
];
