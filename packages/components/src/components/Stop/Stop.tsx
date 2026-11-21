import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import text from '../../styles/text.module.css';
import styles from './Stop.module.css';

type StopProps = PropsWithChildren<{
  period: string;
  title: ReactNode;
  current?: boolean;
  className?: string;
}>;

export const Stop = ({ period, title, current = false, className, children }: StopProps): ReactElement =>
  <div className={clsx(styles.stop, className)}>
    <p className={clsx(text.meta, styles.period)}>{period}</p>
    <h3 className={clsx(styles.title, current && styles.current)}>{title}</h3>
    {children}
  </div>;
