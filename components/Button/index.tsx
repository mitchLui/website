import buttonStyles from './Button.module.css';
import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: string;
  icon?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const Button = ({ href = '', onClick, children, icon, target }: ButtonProps): React.ReactElement => {
  return (
    <Link className={buttonStyles.primary} onClick={onClick} href={href} target={target}>{children}</Link>
  );
};

export default Button;