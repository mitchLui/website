import { ReactElement } from 'react';
import { Button } from '../Button/Button';
import { Image, Thumbnail } from '../Thumbnail/Thumbnail';
import { externalLink } from '../../links';
import { NewTabHint } from '../NewTabHint/NewTabHint';
import styles from './ProjectCard.module.css';

export type ProjectCardProps = {
  title: string;
  headline: string;
  href: string;
  image: Image;
  highlights?: string[];
  codeUrl?: string;
  priority?: boolean;
};

export const ProjectCard = ({ title, headline, href, image, highlights = [], codeUrl, priority }: ProjectCardProps): ReactElement =>
  <article className={styles.card}>
    <Thumbnail className={styles.thumbnail} image={image} priority={priority}/>
    <h2>{title}</h2>
    <div className={styles.cardContent}>
      {headline}
      {highlights.length > 0 &&
        <ul className={styles.impact}>
          {highlights.map(item => <li key={item}>{item}</li>)}
        </ul>}
    </div>
    <footer>
      <Button as="a" variant="outline" arrow className={styles.cardLink} to={href}>Read more</Button>
      {codeUrl && <Button as="a" variant="tertiary" className={styles.aboveCardLink} to={codeUrl} {...externalLink}>Code<NewTabHint/></Button>}
    </footer>
  </article>;
