import styles from './Arrow.module.css';
import { ReactElement } from 'react';

type ArrowProps = {
  text: string;
};

export const Arrow = ({ text }: ArrowProps): ReactElement =>
  <div className={styles.arrowContainer}>
    <div className={styles.arrow}/>
    <span className={styles.arrowText}>{text}</span>
  </div>;
