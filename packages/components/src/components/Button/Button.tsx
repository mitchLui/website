import { Link, LinkProps } from 'react-router';
import { Arrow } from '../Arrow/Arrow';
import { ButtonHTMLAttributes, ReactElement } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline';

type Props = {
  variant?: ButtonVariant;
  arrow?: boolean;
} & (({ as: 'a' } & LinkProps) | ({ as?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>));

const ArrowIcon = () =>
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>;

export const Button = ({ variant = 'primary', arrow = false, className, children, ...props }: Props): ReactElement => {
  const classes = clsx(styles.button, styles[variant], className);
  const content = <>{children}{arrow && <ArrowIcon/>}</>;
  if (props.as === 'a') {
    const { as: _as, ...link } = props;
    return <Link className={classes} {...link}>{content}</Link>;
  }
  const { as: _as, ...button } = props;
  return <button className={classes} {...button}>{content}</button>;
};

export const BackButton = ({ to, text }: { to: string, text: string }): ReactElement =>
  <Link to={to} className={styles.back}><Arrow text={text}/></Link>;
