import { projects } from './projects';
import { formatPeriod } from './dates';
import { kindTags } from './cards';
import { lineFor } from './line';

export const shareCardPath = (id: string) => `/share/${id}.jpg`;

export const shareCards = () => Object.entries(projects).map(([id, project]) => ({
  path: shareCardPath(id),
  title: project.title,
  eyebrow: project.kind === 'professional' ? formatPeriod(project.started, project.ended) : `${kindTags[project.kind].label} · ${formatPeriod(project.started, project.ended)}`,
  line: lineFor(id, project),
  screenshot: `/project-assets/png/${project.thumbnail}.png`
}));
