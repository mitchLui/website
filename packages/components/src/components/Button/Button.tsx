import { Link, LinkProps } from 'react-router';
import { Icon } from '../Icon/Icon';
import { ButtonHTMLAttributes, ReactElement } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline';

type Props = {
  variant?: ButtonVariant;
  arrow?: boolean;
} & (({ as: 'a' } & LinkProps) | ({ as?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>));

export const Button = ({ variant = 'primary', arrow = false, className, children, ...props }: Props): ReactElement => {
  const classes = clsx(styles.button, styles[variant], className);
  const content = <>{children}{arrow && <Icon name="arrow-right"/>}</>;
  if (props.as === 'a') {
    const { as: _as, ...link } = props;
    return <Link className={classes} {...link}>{content}</Link>;
  }
  const { as: _as, ...button } = props;
  return <button className={classes} {...button}>{content}</button>;
};

export const BackButton = ({ to, text }: { to: string, text: string }): ReactElement =>
  <Link to={to} className={styles.back}><Icon name="chevron-left" size={18}/>{text}</Link>;
