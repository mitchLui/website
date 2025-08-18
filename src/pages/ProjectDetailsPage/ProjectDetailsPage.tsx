import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router';
import { BackButton, Button } from '../../components/Button/Button';
import { projects } from '../../data/projects';
import { setPageProperties } from '../../meta/meta';
import './ProjectDetailsPage.scss';

export const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projects[projectId as string];

  useEffect(() => {
    if (projectId && project !== undefined) {
      setPageProperties({
        title: project.title + ' | Mitch Lui',
        description: project.title
      });
    }
  }, [projectId]);

  if (projectId && project !== undefined) {
    const demoUrl = project.website ? project.website : null;
    const githubUrl = project.git_url ? project.git_url : null;

    return (
      <>
        <BackButton to="/" text="Back" />
        <div className={'project-content'}>
          <h1 className={'text'}>{project.title}</h1>
          <picture className={'project-thumbnail'}>
            <source srcSet={'/project-assets/webp/' + project.thumbnail + '.webp'} type="image/webp" />
            <img
              src={'/project-assets/png/' + project.thumbnail + '.png'}
              alt={project.alt}
            />
          </picture>
          <div className={'project-headline'}>
            <h2>{project.headline}</h2>
          </div>
          <div className={'project-buttons'}>
            {
              githubUrl &&
                        <Button as="a" to={githubUrl} target={'_blank'}>GitHub</Button>
            }
            {
              demoUrl &&
                        <Button as="a" to={demoUrl} target={'_blank'}>Website</Button>
            }
          </div>
          <div className={'project-status'}>
            <b>Current Status: </b>{project.current_status}<br/>
            <b>Started: </b>{project.started}<br/>
            <b>Ended: </b>{project.ended}<br/>
            <b>Awards: </b>{project.awards}<br/>
            <b>Technologies used: </b>{project.technologies}<br/>
          </div>
          <div className={'project-text'}>
            {project.content_detailed.map((paragraph, index) =>
              <p key={index}>{paragraph}</p>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return <Navigate to={'/not-found'}/>;
  }
};
