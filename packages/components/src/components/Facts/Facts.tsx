import { PropsWithChildren, ReactElement } from 'react';
import styles from './Facts.module.css';

export const Facts = ({ children }: PropsWithChildren): ReactElement =>
  <dl className={styles.facts}>{children}</dl>;

export const Fact = ({ term, children }: PropsWithChildren<{ term: string }>): ReactElement =>
  <div className={styles.fact}>
    <dt>{term}</dt>
    <dd>{children}</dd>
  </div>;
