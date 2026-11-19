import { ProjectDetailsPage } from '../pages/ProjectDetailsPage/ProjectDetailsPage';
import { projects } from '../data/projects';
import { notFoundMeta, pageMeta } from '../meta/meta';
import { projectHref } from '../data/links';
import type { Route } from './+types/project';

export const meta = ({ params }: Route.MetaArgs) => {
  const project = projects[params.projectId];
  return project
    ? pageMeta({ title: project.title + ' | Mitch Lui', description: project.headline, path: projectHref(params.projectId) })
    : notFoundMeta();
};

export default ProjectDetailsPage;
