import { useState } from 'react';
import { Grid } from '../../layouts/Grid/Grid';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { Dropdown } from '../Dropdown/Dropdown';
import { ProjectProps } from '../../data/projects';
import './Projects.scss';

type ProjectComponentProps = {
    projects: Record<string, ProjectProps>;
}

export const Projects = ({ projects }: ProjectComponentProps) => {
  const [filter, setFilter] = useState('none');

  const filterProjects = ({ obj, predicate }: {obj: Record<string, ProjectProps>, predicate: Function}): any => {
    return Object.keys(obj)
      .filter(key => predicate(obj[key]))
      .reduce((res, key) => Object.assign(res, { [key]: obj[key] }), {});
  };

  const getFilteredProjects = () => {
    switch (filter) {
    case 'none':
      return projects;
    default:
      return filterProjects({ obj: projects, predicate: (project: ProjectProps) => project.category === filter });
    }
  };

  return (
    <>
      <div>
        <span className={'container-header'}><h2><code>Projects + Work</code></h2></span>
        <h3>An archive of what I&apos;m working on and what I&apos;ve done in the past.</h3>
        <Dropdown
          className={'project-sort'}
          onChange={setFilter}
          label={'Filter by:'}
          options={
            {
              Categories: [
                { value: 'none', text: 'None' },
                { value: 'professional', text: 'Professional experience' },
                { value: 'personal', text: 'Personal projects' },
                { value: 'hackathon', text: 'Hackathon projects' },
                { value: 'university', text: 'Coursework' }
              ]
            }
          } />

      </div>
      <Grid>
        {
          Object.keys(getFilteredProjects()).map((key) => {
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
