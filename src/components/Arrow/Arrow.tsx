import './arrow.scss';
import { ReactElement } from 'react';

type ArrowProps = {
    text: string;
}

export const Arrow = ({ text }: ArrowProps): ReactElement =>
  <div className={'arrow-container'}>
    <div className={'arrow'}/>
    <span className={'arrow-text'}>{text}</span>
  </div>;
