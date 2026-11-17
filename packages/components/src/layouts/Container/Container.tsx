import styles from './Container.module.css';
import { PropsWithChildren, ReactElement } from 'react';

export const Container = ({ children }: PropsWithChildren): ReactElement =>
  <div className={styles.container}>{children}</div>;

export const ContainerHeader = ({ eyebrow, children }: PropsWithChildren<{ eyebrow?: string }>): ReactElement =>
  <div className={styles.containerHeader}>
    {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
    {children}
  </div>;
