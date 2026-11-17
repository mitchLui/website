import { Link } from 'react-router';
import { ProjectProps } from '../../data/projects';
import { ContainerHeader } from '../../layouts/Container/Container';
import styles from './Sitemap.module.css';

export const Sitemap = ({ projects }: { projects: Record<string, ProjectProps> }) =>
  <>
    <ContainerHeader><h1><code>Sitemap</code></h1></ContainerHeader>
    <ul className={styles.sitemap}>
      <li><Link to={'/'}>index</Link></li>
      <ul className={styles.list}>
        <li><Link to={'/projects'}>projects</Link></li>
        <ul className={styles.projects}>
          {
            Object.keys(projects).map(function (key, index) {
              return (
                <li key={index}><Link to={`/${projects[key].company}/projects/${key}`}>{key}</Link></li>
              );
            })
          }
        </ul>
        <li><Link to={'/cv.pdf'}>cv.pdf</Link></li>
        <li><Link to={'/sitemap'}>sitemap</Link></li>
        <li><Link to={'/linkedin'}>linkedin</Link></li>
        <li><Link to={'/github'}>github</Link></li>
      </ul>
    </ul>
  </>;
