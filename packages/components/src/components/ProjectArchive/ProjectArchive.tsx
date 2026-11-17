import { ReactElement } from 'react';
import { Link } from 'react-router';
import styles from './ProjectArchive.module.css';

export type ArchiveEntry = {
  title: string;
  href: string;
  meta: string;
};

export const ProjectArchive = ({ entries }: { entries: ArchiveEntry[] }): ReactElement =>
  <ul className={styles.archive}>
    {entries.map(entry =>
      <li key={entry.href}>
        <Link to={entry.href} className={styles.entry}>
          <span className={styles.title}>{entry.title}</span>
          <span className={styles.meta}>{entry.meta}</span>
        </Link>
      </li>
    )}
  </ul>;
