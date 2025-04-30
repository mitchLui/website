import { Button, LinkButton } from '../Button/Button';
import { ReactElement } from 'react';
import './ProjectCard.scss';

type ProjectCardProps = {
    key: number | string;
    name: string;
    title: string;
    thumbnail: string;
    alt: string;
    headline: string;
    gitUrl?: string;
}

export const ProjectCard = ({ key, name, title, thumbnail, alt, headline, gitUrl }: ProjectCardProps): ReactElement =>
  <article key={key} className={'card project ' + name}>
    <picture className={'thumbnail'}>
      <source srcSet={'/project-assets/webp/' + thumbnail + '.webp'} type="image/webp" />
      <img
        src={'/project-assets/png/' + thumbnail + '.png'}
        alt={alt}
      />
    </picture>
    <h2>{title}</h2>
    <div className={'card-content'}>{headline}</div>
    <footer>
      <LinkButton to={'/projects/' + name} text={'Learn more'}/>
      {
        gitUrl &&
                <Button url={gitUrl} target={'_blank'} text={'Code'}/>
      }
    </footer>
  </article>;
