import { ReactElement } from 'react';
import { Link } from 'react-router';
import { Tag, TagColor } from '../Tag/Tag';
import clsx from 'clsx';
import styles from './ProjectArchive.module.css';
import text from '../../styles/text.module.css';

export type ArchiveEntry = {
  title: string;
  href: string;
  date: string;
  note?: string;
  tag?: { label: string; color: TagColor };
};

export const ProjectArchive = ({ entries }: { entries: ArchiveEntry[] }): ReactElement =>
  <ul className={styles.archive}>
    {entries.map(entry =>
      <li key={entry.href}>
        <Link to={entry.href} className={styles.entry}>
          <span className={styles.title}>{entry.title}</span>
          {entry.note && <span className={styles.note}>{entry.note}</span>}
          <span className={styles.tag}>{entry.tag && <Tag color={entry.tag.color}>{entry.tag.label}</Tag>}</span>
          <span className={clsx(text.meta, styles.date)}>{entry.date}</span>
        </Link>
      </li>
    )}
  </ul>;
