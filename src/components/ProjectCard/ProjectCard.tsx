import { Button } from '../Button/Button';
import { ReactElement } from 'react';
import { Project } from '../../data/projects';
import { rolesFor } from '../../data/roles';
import { ThumbnailPicture } from '../Thumbnail/Thumbnail';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  id: string;
  project: Project;
};

export const ProjectCard = ({ id, project }: ProjectCardProps): ReactElement =>
  <article className={styles.card}>
    <ThumbnailPicture className={styles.thumbnail} name={project.thumbnail} alt={project.alt}/>
    <h2>{project.title}</h2>
    <div className={styles.cardContent}>
      {project.headline}
      {project.kind === 'professional' &&
        <ul className={styles.impact}>
          {rolesFor(id)[0].impact.map(item => <li key={item}>{item}</li>)}
        </ul>}
    </div>
    <footer>
      <Button as="a" to={'/work/' + id}>Learn more</Button>
      {
        project.git_url &&
                <Button as="a" to={project.git_url} target={'_blank'}>Code</Button>
      }
    </footer>
  </article>;
