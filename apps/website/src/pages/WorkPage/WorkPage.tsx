import { ContainerHeader, Grid, ProjectArchive, ProjectCard } from '@mitchlui/components';
import { archivedProjects, professionalProjects } from '../../data/projects';
import { toArchiveEntry, toProjectCard } from '../../data/cards';

export const WorkPage = () =>
  <>
    <ContainerHeader><h1>Work</h1></ContainerHeader>
    <Grid>
      {professionalProjects.map(([id, project]) => <ProjectCard key={id} {...toProjectCard(id, project)}/>)}
    </Grid>
    <section>
      <ContainerHeader><h2>Earlier projects</h2></ContainerHeader>
      <ProjectArchive entries={archivedProjects.map(([id, project]) => toArchiveEntry(id, project))}/>
    </section>
  </>;
