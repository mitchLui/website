import { PropsWithChildren, ReactElement } from 'react';
import clsx from 'clsx';
import styles from './Tag.module.css';

export type TagColor = 'green' | 'olive' | 'blue' | 'orange';

export const Tag = ({ color, children }: PropsWithChildren<{ color: TagColor }>): ReactElement =>
  <span className={clsx(styles.tag, styles[color])}>{children}</span>;
