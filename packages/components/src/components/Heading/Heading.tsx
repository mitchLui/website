import { PropsWithChildren, ReactElement } from 'react';
import styles from './Heading.module.css';

export const PageTitle = ({ children }: PropsWithChildren): ReactElement =>
  <h1 className={styles.pageTitle}>{children}</h1>;

export const SectionTitle = ({ id, children }: PropsWithChildren<{ id?: string }>): ReactElement =>
  <h2 id={id} className={styles.sectionTitle}>{children}</h2>;
