import { useParams } from 'react-router';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { BackButton, Button } from '../../components/Button/Button';
import { Project, projects } from '../../data/projects';
import { formatPeriod } from '../../data/dates';
import { rolesFor } from '../../data/roles';
import { ThumbnailPicture } from '../../components/Thumbnail/Thumbnail';
import styles from './ProjectDetailsPage.module.css';

const Impact = ({ projectId }: { projectId: string }) =>
  <section>
    <h3>Impact</h3>
    {rolesFor(projectId).map(role =>
      <div key={role.title + role.started}>
        <h4>{role.title} · {formatPeriod(role.started, role.ended)}</h4>
        <ul className={styles.impact}>
          {role.impact.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    )}
  </section>;

const Details = ({ project }: { project: Project }) =>
  <div className={styles.projectStatus}>
    <div>{formatPeriod(project.started, project.ended)} · {project.technologies.join(', ')}</div>
    {project.kind === 'hackathon' && <div><b>Event: </b>{project.event}</div>}
    {project.awards && <div><b>Awards: </b>{project.awards.join(' · ')}</div>}
    {project.kind === 'academic' && project.grade && <div><b>Grade: </b>{project.grade}</div>}
  </div>;

export const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projects[projectId as string];

  if (!project) {
    return <NotFoundPage/>;
  }

  return (
    <>
      <BackButton to="/work" text="All work" />
      <div className={styles.projectContent}>
        <h1 className={styles.text}>{project.title}</h1>
        <ThumbnailPicture className={styles.projectThumbnail} name={project.thumbnail} alt={project.alt}/>
        <div>
          <h2>{project.headline}</h2>
        </div>
        <div className={styles.projectButtons}>
          {project.git_url && <Button as="a" to={project.git_url} target={'_blank'}>GitHub</Button>}
          {project.website && <Button as="a" to={project.website} target={'_blank'}>Website</Button>}
        </div>
        {project.kind === 'professional' && <Impact projectId={projectId as string}/>}
        <Details project={project}/>
        <div className={styles.projectText}>
          {project.content_detailed.map((paragraph, index) =>
            <p key={index}>{paragraph}</p>
          )}
        </div>
      </div>
    </>
  );
};
