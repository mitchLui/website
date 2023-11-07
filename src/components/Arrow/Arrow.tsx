import './arrow.scss';
import React from 'react';

type ArrowProps = {
    text: string;
}

export const Arrow = ({ text }: ArrowProps): React.ReactElement =>
  <div className={'arrow-container'}>
    <div className={'arrow'}/>
    <span className={'arrow-text'}>{text}</span>
  </div>;
