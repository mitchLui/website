import { PropsWithChildren, ReactElement } from 'react';
import styles from './Grid.module.css';

export const Grid = ({ children }: PropsWithChildren): ReactElement =>
  <div className={styles.grid}>{children}</div>;
