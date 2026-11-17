import { ReactElement } from 'react';
import { Link } from 'react-router';
import clsx from 'clsx';
import styles from './ProjectTile.module.css';

export type ProjectTileProps = {
  href: string;
  eyebrow: string;
  title: string;
  detail?: string;
  more?: boolean;
};

export const ProjectTile = ({ href, eyebrow, title, detail, more = false }: ProjectTileProps): ReactElement =>
  <Link to={href} className={clsx(styles.tile, more && styles.more)}>
    <span className={styles.eyebrow}>{eyebrow}</span>
    <span className={styles.title}>{title}</span>
    {detail && <span className={styles.detail}>{detail}</span>}
  </Link>;
