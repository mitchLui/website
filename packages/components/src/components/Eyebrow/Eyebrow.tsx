import { PropsWithChildren, ReactElement } from 'react';
import { LineColor, LineMarker } from '../RouteLine/RouteLine';
import styles from './Eyebrow.module.css';

type EyebrowProps = PropsWithChildren<{
  line?: LineColor;
  marker?: 'bar' | 'dot';
}>;

export const Eyebrow = ({ line, marker = 'bar', children }: EyebrowProps): ReactElement =>
  <p className={styles.eyebrow}>
    {line && <LineMarker line={line} shape={marker}/>}
    <span>{children}</span>
  </p>;
