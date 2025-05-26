import { Link, LinkProps } from 'react-router-dom';
import { Arrow } from '../Arrow/Arrow';
import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import './Button.scss';
import clsx from 'clsx';

type AnchorProps = {
 as: 'a';
} & LinkProps;

type ButtonProps = {
 as: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
  className?: string;
  as?: 'a' | 'button';
  addonStart?: ReactNode;
} & (AnchorProps | ButtonProps);

export const Button = ({ as = 'button', className, addonStart, ...props }: Props): ReactElement => {
  if (as === 'a') {
    return <Link className={clsx('button', className)} {...(props as AnchorProps)}>{props.children}</Link>;
  }
  return <button className={clsx('button', className)} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>{props.children}</button>;
};

export const BackButton = ({ to, text }: { to: string, text: string }): ReactElement =>
  <Link to={to} className={'modal'}><Arrow text={text}/></Link>;
