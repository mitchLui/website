import { Projects } from '../../components/Projects/Projects';
import { ProjectArchive } from '../../components/ProjectArchive/ProjectArchive';
import { ContainerHeader } from '../../layouts/Container/Container';
import { archivedProjects, professionalProjects } from '../../data/projects';

export const WorkPage = () =>
  <>
    <ContainerHeader><h1>Work</h1></ContainerHeader>
    <Projects projects={professionalProjects}/>
    <section>
      <ContainerHeader><h2>Earlier projects</h2></ContainerHeader>
      <ProjectArchive projects={archivedProjects}/>
    </section>
  </>;
