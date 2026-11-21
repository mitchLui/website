import { ReactElement } from 'react';
import text from '../../styles/text.module.css';

export const NewTabHint = ({ format }: { format?: string }): ReactElement =>
  <span className={text.visuallyHidden}>{` (${format ? `${format}, ` : ''}opens in a new tab)`}</span>;
