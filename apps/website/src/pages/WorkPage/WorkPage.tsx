import { ContainerHeader, Grid, PageTitle, ProjectArchive, ProjectCard, SectionTitle } from '@mitchlui/components';
import { archivedProjects, professionalProjects } from '../../data/projects';
import { toArchiveEntry, toProjectCard } from '../../data/cards';

export const WorkPage = () =>
  <>
    <ContainerHeader><PageTitle>Work</PageTitle></ContainerHeader>
    <Grid>
      {professionalProjects.map(([id, project]) => <ProjectCard key={id} {...toProjectCard(id, project)}/>)}
    </Grid>
    <section>
      <ContainerHeader><SectionTitle>Earlier projects</SectionTitle></ContainerHeader>
      <ProjectArchive entries={archivedProjects.map(([id, project]) => toArchiveEntry(id, project))}/>
    </section>
  </>;
