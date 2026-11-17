import { Link } from 'react-router';
import { Project } from '../../data/projects';
import { ContainerHeader } from '@mitchlui/components';
import styles from './Sitemap.module.css';

export const Sitemap = ({ projects }: { projects: Record<string, Project> }) =>
  <>
    <ContainerHeader><h1><code>Sitemap</code></h1></ContainerHeader>
    <ul className={styles.sitemap}>
      <li>
        <Link to={'/'}>index</Link>
        <ul className={styles.list}>
          <li>
            <Link to={'/work'}>work</Link>
            <ul className={styles.projects}>
              {
                Object.keys(projects).map(id =>
                  <li key={id}><Link to={`/work/${id}`}>{id}</Link></li>
                )
              }
            </ul>
          </li>
          <li><Link to={'/cv.pdf'}>cv.pdf</Link></li>
          <li><Link to={'/sitemap'}>sitemap</Link></li>
          <li><Link to={'/linkedin'}>linkedin</Link></li>
          <li><Link to={'/github'}>github</Link></li>
        </ul>
      </li>
    </ul>
  </>;
