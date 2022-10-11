import arrowStyles from './Arrow.module.scss';
import React from 'react';

type ArrowProps = {
    children: string;
}

const Arrow = ({ children }: ArrowProps): React.ReactElement => 
  <div className={arrowStyles.container}>
    <div className={arrowStyles.arrow}/>
    <span className={arrowStyles.text}>{children}</span>
  </div>;

export default Arrow;