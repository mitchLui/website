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
        <Link to={sitemap.home.href}>index</Link>
        <ul className={styles.list}>
          <li>
            <Link to={sitemap.work.href}>work</Link>
            <ul className={styles.projects}>
              {
                Object.keys(projects).map(id =>
                  <li key={id}><Link to={projectHref(id)}>{id}</Link></li>
                )
              }
            </ul>
          </li>
          {sitemap.pages.map(link => <li key={link.href}><Link to={link.href}>{link.href.replaceAll('/', '')}</Link></li>)}
        </ul>
      </li>
    </ul>
  </>;
