import { Link } from 'react-router';
import { projects } from '../../data/projects';
import { ContainerHeader, PageTitle } from '@mitchlui/components';
import { projectHref, sitemap } from '../../data/links';
import styles from './SitemapPage.module.css';

export const SitemapPage = () =>
  <>
    <ContainerHeader><PageTitle>Sitemap</PageTitle></ContainerHeader>
    <ul className={styles.sitemap}>
      <li>
        <Link to={sitemap.home.href}>{sitemap.home.label}</Link>
        <ul className={styles.list}>
          <li>
            <Link to={sitemap.work.href}>{sitemap.work.label}</Link>
            <ul className={styles.projects}>
              {
                Object.entries(projects).map(([id, project]) =>
                  <li key={id}><Link to={projectHref(id)}>{project.title}</Link></li>
                )
              }
            </ul>
          </li>
          {sitemap.pages.map(link => <li key={link.href}><Link to={link.href}>{link.label}</Link></li>)}
        </ul>
      </li>
    </ul>
  </>;
