import { Link, LinkProps } from 'react-router';
import { Arrow } from '../Arrow/Arrow';
import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type AnchorProps = {
  as: 'a';
} & LinkProps;

type ButtonProps = {
  as: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
  className?: string;
  as?: 'a' | 'button';
  variant?: ButtonVariant;
  addonStart?: ReactNode;
} & (AnchorProps | ButtonProps);

export const Button = ({ as = 'button', variant = 'primary', className, ...props }: Props): ReactElement => {
  const classes = clsx(styles.button, styles[variant], className);
  if (as === 'a') {
    return <Link className={classes} {...(props as AnchorProps)}>{props.children}</Link>;
  }
  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>{props.children}</button>;
};

export const BackButton = ({ to, text }: { to: string, text: string }): ReactElement =>
  <Link to={to} className={styles.modal}><Arrow text={text}/></Link>;
