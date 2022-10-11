import buttonStyles from './Button.module.scss';
import Link, { LinkProps } from 'next/link';
import React, { HTMLProps } from 'react';

type ButtonProps = HTMLProps<LinkProps> & {
  icon?: string;
};

const Button = ({ href = '', onClick, children, icon, target }: ButtonProps): React.ReactElement => {
  return (
    <div className={buttonStyles.button}>
      <Link onClick={onClick} href={href} target={target}>{children}</Link>
    </div>
  );
};

export default Button;