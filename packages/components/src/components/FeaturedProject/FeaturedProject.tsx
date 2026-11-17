import { ReactElement } from 'react';
import { Button } from '../Button/Button';
import { Image, Thumbnail } from '../Thumbnail/Thumbnail';
import styles from './FeaturedProject.module.css';

export type Highlight = {
  label: string;
  period: string;
  items: string[];
};

export type FeaturedProjectProps = {
  title: string;
  headline: string;
  href: string;
  image: Image;
  period: string;
  highlights: Highlight[];
};

export const FeaturedProject = ({ title, headline, href, image, period, highlights }: FeaturedProjectProps): ReactElement =>
  <article className={styles.feature}>
    <Thumbnail className={styles.image} image={image}/>
    <div className={styles.content}>
      <h2>{title}</h2>
      <p className={styles.headline}>{headline}</p>
      <dl className={styles.highlights}>
        {highlights.map(highlight =>
          <div key={highlight.label + highlight.period} className={styles.highlight}>
            <dt>
              {highlight.label}
              <span className={styles.period}>{highlight.period}</span>
            </dt>
            {highlight.items.map(item => <dd key={item}>{item}</dd>)}
          </div>
        )}
      </dl>
      <footer className={styles.footer}>
        <Button as="a" to={href}>Learn more</Button>
        <span className={styles.period}>{period}</span>
      </footer>
    </div>
  </article>;
