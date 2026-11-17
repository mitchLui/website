import { ReactElement } from 'react';
import { Link } from 'react-router';
import { Project } from '../../data/projects';
import { formatMonth } from '../../data/dates';
import styles from './ProjectArchive.module.css';

const kindLabels: Record<Project['kind'], string> = {
  professional: 'Professional',
  academic: 'Academic',
  hackathon: 'Hackathon',
  personal: 'Personal'
};

export const ProjectArchive = ({ projects }: { projects: Array<[string, Project]> }): ReactElement =>
  <ul className={styles.archive}>
    {projects.map(([id, project]) =>
      <li key={id}>
        <Link to={'/work/' + id} className={styles.entry}>
          <span className={styles.title}>{project.title}</span>
          <span className={styles.meta}>
            {[kindLabels[project.kind], formatMonth(project.started), ...(project.awards ?? [])].join(' · ')}
          </span>
        </Link>
      </li>
    )}
  </ul>;
