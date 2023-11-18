import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router';
import { Button, GoBackButton } from '../../components/Button/Button';
import { projects } from '../../data/projects';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';
import './projectmodalpage.scss';

export function ProjectModalPage (): React.ReactElement {
  const { projectClass } = useParams();

  useEffect(() => {
    if (projectClass) {
      if (projects[projectClass] !== undefined) {
        setTitle(projects[projectClass].title + ' | Mitch Lui');
        setDescription(projects[projectClass].title);
        setOgProperties({
          title: projects[projectClass] + ' | Mitch Lui',
          description: projects[projectClass].title
        });
      }
    }
  }, [projectClass]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (projectClass && projects[projectClass] !== undefined) {
    const demoUrl = projects[projectClass].website ? projects[projectClass].website : null;
    const githubUrl = projects[projectClass].git_url ? projects[projectClass].git_url : null;

    return (
      <>
        <GoBackButton to={'/projects'} text={'Back'}/>
        <div className={'modal-content'}>
          <h1 className={'text'}>{projects[projectClass].title}</h1>
          <picture className={'modal-thumbnail'}>
            <source srcSet={'/project_assets/webp/' + projects[projectClass].thumbnail + '.webp'} type="image/webp" />
            <img
              src={'/project_assets/png/' + projects[projectClass].thumbnail + '.png'}
              alt={projects[projectClass].alt}
            />
          </picture>
          <div className={'modal-headline'}>
            <h2>{projects[projectClass].headline}</h2>
          </div>
          <div className={'modal-buttons'}>
            {
              githubUrl &&
                        <Button url={githubUrl} target={'_blank'} text={'GitHub'}/>
            }
            {
              demoUrl &&
                        <Button url={demoUrl} target={'_blank'} text={'Website'}/>
            }
          </div>
          <div className={'modal-status'}>
            <b>Category: </b>{projects[projectClass].category}<br/>
            <b>Current Status: </b>{projects[projectClass].current_status}<br/>
            <b>Started: </b>{projects[projectClass].started}<br/>
            <b>Ended: </b>{projects[projectClass].ended}<br/>
            <b>Awards: </b>{projects[projectClass].awards}<br/>
            <b>Technologies used: </b>{projects[projectClass].technologies}<br/>
          </div>
          <div className={'modal-text'}>
            {projects[projectClass].content_detailed.map((paragraph, index) =>
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
