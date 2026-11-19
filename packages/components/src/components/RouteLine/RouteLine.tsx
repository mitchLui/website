import { PropsWithChildren, ReactElement } from 'react';
import clsx from 'clsx';
import styles from './RouteLine.module.css';

export type LineColor = 'wise' | 'education' | 'early';

type StationProps = PropsWithChildren<{
  line: LineColor;
  continuesAs?: LineColor;
  kind?: 'stop' | 'current' | 'interchange';
}>;

export const RouteLine = ({ children }: PropsWithChildren): ReactElement =>
  <ol className={styles.route}>{children}</ol>;

export const Station = ({ line, continuesAs = line, kind = 'stop', children }: StationProps): ReactElement =>
  <li className={clsx(styles.station, styles[kind])} aria-current={kind === 'current' ? 'step' : undefined}>
    <div className={styles.rail} aria-hidden="true">
      <span className={clsx(styles.segment, styles.above, styles[line])}/>
      <span className={clsx(styles.segment, styles.below, styles[continuesAs])}/>
      <span className={styles.dot}/>
    </div>
    <div className={styles.content}>{children}</div>
  </li>;

export const LineMarker = ({ line }: { line: LineColor }): ReactElement =>
  <span className={clsx(styles.marker, styles[line])} aria-hidden="true"/>;

export const Terminus = ({ children }: PropsWithChildren): ReactElement =>
  <li className={clsx(styles.station, styles.terminus)}>
    <div className={styles.rail} aria-hidden="true">
      <span className={styles.bar}/>
    </div>
    <div className={styles.content}>{children}</div>
  </li>;
