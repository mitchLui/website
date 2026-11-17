import { Link, LinkProps } from 'react-router';
import { Arrow } from '../Arrow/Arrow';
import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import styles from './Button.module.css';
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

export const Button = ({ as = 'button', className, ...props }: Props): ReactElement => {
  if (as === 'a') {
    return <Link className={clsx(styles.button, className)} {...(props as AnchorProps)}>{props.children}</Link>;
  }
  return <button className={clsx(styles.button, className)} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>{props.children}</button>;
};

export const BackButton = ({ to, text }: { to: string, text: string }): ReactElement =>
  <Link to={to} className={styles.modal}><Arrow text={text}/></Link>;
