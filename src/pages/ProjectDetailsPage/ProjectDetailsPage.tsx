import { ReactElement, useEffect } from 'react';
import { useParams, Navigate } from 'react-router';
import { Button, GoBackButton } from '../../components/Button/Button';
import { projects } from '../../data/projects';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';
import './projectdetailspage.scss';

export function ProjectDetailsPage (): ReactElement {
  const { projectId } = useParams();
  const project = projects[projectId as string];

  useEffect(() => {
    if (projectId) {
      if (project !== undefined) {
        setTitle(project.title + ' | Mitch Lui');
        setDescription(project.title);
        setOgProperties({
          title: project + ' | Mitch Lui',
          description: project.title
        });
      }
    }
  }, [projectId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (projectId && project !== undefined) {
    const demoUrl = project.website ? project.website : null;
    const githubUrl = project.git_url ? project.git_url : null;

    return (
      <>
        <GoBackButton to={'/'} text={'Back'}/>
        <div className={'project-content'}>
          <h1 className={'text'}>{project.title}</h1>
          <picture className={'project-thumbnail'}>
            <source srcSet={'/project_assets/webp/' + project.thumbnail + '.webp'} type="image/webp" />
            <img
              src={'/project_assets/png/' + project.thumbnail + '.png'}
              alt={project.alt}
            />
          </picture>
          <div className={'project-headline'}>
            <h2>{project.headline}</h2>
          </div>
          <div className={'project-buttons'}>
            {
              githubUrl &&
                        <Button url={githubUrl} target={'_blank'} text={'GitHub'}/>
            }
            {
              demoUrl &&
                        <Button url={demoUrl} target={'_blank'} text={'Website'}/>
            }
          </div>
          <div className={'project-status'}>
            <b>Category: </b>{project.category}<br/>
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
}
