import styles from './Container.module.css';
import { Copyright } from '../../components/Copyright/Copyright';
import { PropsWithChildren, ReactElement } from 'react';

export const Container = ({ children }: PropsWithChildren): ReactElement =>
  <div className={styles.container}>{children}<Copyright/></div>;

export const ContainerHeader = ({ children }: PropsWithChildren): ReactElement =>
  <span className={styles.containerHeader}>{children}</span>;
