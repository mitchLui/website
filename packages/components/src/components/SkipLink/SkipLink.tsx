import { ReactElement } from 'react';
import styles from './SkipLink.module.css';

export const SkipLink = ({ target }: { target: string }): ReactElement =>
  <a href={`#${target}`} className={styles.skipLink}>Skip to content</a>;
