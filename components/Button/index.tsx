import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  href: string;
  onClick?: () => void;
}

const Button = ({ href, onClick = () => {} }: ButtonProps): React.ReactElement => {
  return (
    <Link onClick={onClick} href={href} />
  );
};

export default Button;