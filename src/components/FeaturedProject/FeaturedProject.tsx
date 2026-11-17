import { ReactElement } from 'react';
import { Button } from '../Button/Button';
import { ThumbnailPicture } from '../Thumbnail/Thumbnail';
import { ProfessionalProject } from '../../data/projects';
import { rolesFor } from '../../data/roles';
import { formatPeriod } from '../../data/dates';
import styles from './FeaturedProject.module.css';

type FeaturedProjectProps = {
  id: string;
  project: ProfessionalProject;
};

export const FeaturedProject = ({ id, project }: FeaturedProjectProps): ReactElement => {
  const roles = rolesFor(id);
  const highlightsPerRole = roles.length === 1 ? Infinity : 1;
  return (
    <article className={styles.feature}>
      <ThumbnailPicture className={styles.image} name={project.thumbnail} alt={project.alt}/>
      <div className={styles.content}>
        <h2>{project.title}</h2>
        <p className={styles.headline}>{project.headline}</p>
        <dl className={styles.highlights}>
          {roles.map(role =>
            <div key={role.title + role.started} className={styles.highlight}>
              <dt>
                {role.level}
                <span className={styles.period}>{formatPeriod(role.started, role.ended)}</span>
              </dt>
              {role.impact.slice(0, highlightsPerRole).map(item => <dd key={item}>{item}</dd>)}
            </div>
          )}
        </dl>
        <footer className={styles.footer}>
          <Button as="a" to={'/work/' + id}>Learn more</Button>
          <span className={styles.period}>{formatPeriod(project.started, project.ended)}</span>
        </footer>
      </div>
    </article>
  );
};
