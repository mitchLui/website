import { Link, LinkProps } from 'react-router';
import { Arrow } from '../Arrow/Arrow';
import { ButtonHTMLAttributes, ReactElement } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline';

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
  arrow?: boolean;
} & (AnchorProps | ButtonProps);

const ArrowIcon = () =>
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>;

export const Button = ({ as = 'button', variant = 'primary', arrow = false, className, children, ...props }: Props): ReactElement => {
  const classes = clsx(styles.button, styles[variant], className);
  const content = <>{children}{arrow && <ArrowIcon/>}</>;
  if (as === 'a') {
    return <Link className={classes} {...(props as AnchorProps)}>{content}</Link>;
  }
  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>{content}</button>;
};

export const BackButton = ({ to, text }: { to: string, text: string }): ReactElement =>
  <Link to={to} className={styles.modal}><Arrow text={text}/></Link>;
