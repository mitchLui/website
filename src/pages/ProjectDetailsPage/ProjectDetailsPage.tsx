import { useParams } from 'react-router';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { BackButton, Button } from '../../components/Button/Button';
import { projects } from '../../data/projects';
import styles from './ProjectDetailsPage.module.css';

export const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projects[projectId as string];

  if (projectId && project !== undefined) {
    const demoUrl = project.website ? project.website : null;
    const githubUrl = project.git_url ? project.git_url : null;

    return (
      <>
        <BackButton to="/" text="Back" />
        <div className={styles.projectContent}>
          <h1 className={styles.text}>{project.title}</h1>
          <picture className={styles.projectThumbnail}>
            <source srcSet={'/project-assets/webp/' + project.thumbnail + '.webp'} type="image/webp" />
            <img
              src={'/project-assets/png/' + project.thumbnail + '.png'}
              alt={project.alt}
            />
          </picture>
          <div>
            <h2>{project.headline}</h2>
          </div>
          <div className={styles.projectButtons}>
            {
              githubUrl &&
                        <Button as="a" to={githubUrl} target={'_blank'}>GitHub</Button>
            }
            {
              demoUrl &&
                        <Button as="a" to={demoUrl} target={'_blank'}>Website</Button>
            }
          </div>
          <div className={styles.projectStatus}>
            <b>Current Status: </b>{project.current_status}<br/>
            <b>Started: </b>{project.started}<br/>
            <b>Ended: </b>{project.ended}<br/>
            <b>Awards: </b>{project.awards}<br/>
            <b>Technologies used: </b>{project.technologies}<br/>
          </div>
          <div className={styles.projectText}>
            {project.content_detailed.map((paragraph, index) =>
              <p key={index}>{paragraph}</p>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return <NotFoundPage/>;
  }
};
