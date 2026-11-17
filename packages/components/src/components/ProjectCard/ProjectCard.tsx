import { ReactElement } from 'react';
import { Button } from '../Button/Button';
import { Image, Thumbnail } from '../Thumbnail/Thumbnail';
import styles from './ProjectCard.module.css';

export type ProjectCardProps = {
  title: string;
  headline: string;
  href: string;
  image: Image;
  highlights?: string[];
  codeUrl?: string;
};

export const ProjectCard = ({ title, headline, href, image, highlights = [], codeUrl }: ProjectCardProps): ReactElement =>
  <article className={styles.card}>
    <Thumbnail className={styles.thumbnail} image={image}/>
    <h2>{title}</h2>
    <div className={styles.cardContent}>
      {headline}
      {highlights.length > 0 &&
        <ul className={styles.impact}>
          {highlights.map(item => <li key={item}>{item}</li>)}
        </ul>}
    </div>
    <footer>
      <Button as="a" variant="secondary" className={styles.cardLink} to={href}>Learn more</Button>
      {codeUrl && <Button as="a" variant="tertiary" className={styles.aboveCardLink} to={codeUrl} target={'_blank'}>Code</Button>}
    </footer>
  </article>;
