import { Grid } from '../../layouts/Grid/Grid';
import { ContainerHeader } from '../../layouts/Container/Container';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { ProjectProps } from '../../data/projects';

type ProjectComponentProps = {
  projects: Record<string, ProjectProps>;
};

export const Projects = ({ projects }: ProjectComponentProps) => {
  return (
    <>
      <div>
        <ContainerHeader><h2><code>Projects + Work</code></h2></ContainerHeader>
        <h3>An archive of what I&apos;m working on and what I&apos;ve done in the past.</h3>

      </div>
      <Grid>
        {
          Object.keys(projects).map((key) => {
            return (
              <ProjectCard
                key={key}
                name={key}
                title={projects[key].title}
                thumbnail={projects[key].thumbnail}
                alt={projects[key].alt}
                headline={projects[key].headline}
                gitUrl={projects[key].git_url}
              />
            );
          })
        }
      </Grid>
    </>
  );
};
