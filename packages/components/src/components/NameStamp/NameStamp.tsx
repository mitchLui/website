import { ReactElement } from 'react';
import styles from './NameStamp.module.css';

export const NameStamp = ({ name }: { name: string }): ReactElement =>
  <span className={styles.stamp} lang="zh-Hant" title={name}>{name}</span>;
