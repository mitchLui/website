import { ReactElement, PropsWithChildren } from 'react';
import styles from './Grid.module.css';

export const Grid = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
};
