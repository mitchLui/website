import cardStyles from './Card.module.css';
import React from 'react';

type CardProps = {
    key?: number;
    className?: string;
    children: React.ReactNode;
}

const Card = ({ key, className, children }: CardProps): React.ReactElement =>
  <article key={key} className={`${cardStyles['card']} ${className}`}>
    {children}
  </article>;

export default Card;