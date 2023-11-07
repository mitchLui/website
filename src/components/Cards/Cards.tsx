import { Button, LinkButton } from '../Button/Button';
import React from 'react';
import './cards.scss';

type CardProps = {
    key: number | string;
    name: string;
    title: string;
    thumbnail: string;
    alt: string;
    headline: string;
    gitUrl?: string;
}

export const ProjectCard = ({ key, name, title, thumbnail, alt, headline, gitUrl }: CardProps): React.ReactElement =>
  <article key={key} className={'card project ' + name}>
    <picture className={'thumbnail'}>
      <source srcSet={'/project_assets/webp/' + thumbnail + '.webp'} type="image/webp" />
      <img
        src={'/project_assets/png/' + thumbnail + '.png'}
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
