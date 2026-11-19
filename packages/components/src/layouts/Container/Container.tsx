import styles from './Container.module.css';
import { PropsWithChildren, ReactElement } from 'react';

export const Container = ({ children }: PropsWithChildren): ReactElement =>
  <div className={styles.container}>{children}</div>;

export const ContainerHeader = ({ children }: PropsWithChildren): ReactElement =>
  <div className={styles.containerHeader}>{children}</div>;
