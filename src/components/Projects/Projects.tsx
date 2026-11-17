import { Grid } from '../../layouts/Grid/Grid';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { Project } from '../../data/projects';

type ProjectsProps = {
  projects: Array<[string, Project]>;
};

export const Projects = ({ projects }: ProjectsProps) =>
  <Grid>
    {projects.map(([id, project]) => <ProjectCard key={id} id={id} project={project}/>)}
  </Grid>;
