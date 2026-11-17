import { ReactElement } from 'react';
import { Link } from 'react-router';
import clsx from 'clsx';
import styles from './ProjectArchive.module.css';

export type TagColor = 'blue' | 'orange' | 'green' | 'violet';

export type ArchiveEntry = {
  title: string;
  href: string;
  meta: string;
  tag?: { label: string; color: TagColor };
};

export const ProjectArchive = ({ entries }: { entries: ArchiveEntry[] }): ReactElement =>
  <ul className={styles.archive}>
    {entries.map(entry =>
      <li key={entry.href}>
        <Link to={entry.href} className={styles.entry}>
          <span className={styles.title}>{entry.title}</span>
          <span className={styles.details}>
            {entry.tag && <span className={clsx(styles.tag, styles[entry.tag.color])}>{entry.tag.label}</span>}
            <span className={styles.meta}>{entry.meta}</span>
          </span>
        </Link>
      </li>
    )}
  </ul>;
