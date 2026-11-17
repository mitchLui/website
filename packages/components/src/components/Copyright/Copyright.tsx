import { PropsWithChildren, ReactElement } from 'react';
import styles from './Copyright.module.css';

const currentYear = (): number => new Date().getFullYear();

export const Copyright = ({ owner, children }: PropsWithChildren<{ owner: string }>): ReactElement =>
  <section className={styles.copyright}>
    © {currentYear()} {owner}
    {children && <p>{children}</p>}
  </section>;
