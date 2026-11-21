import { ReactElement } from 'react';
import { Link, LinkProps } from 'react-router';
import clsx from 'clsx';
import styles from './TextLink.module.css';

type TextLinkProps = LinkProps & {
  quiet?: boolean;
};

export const TextLink = ({ quiet = false, className, ...props }: TextLinkProps): ReactElement =>
  <Link className={clsx(quiet ? styles.quiet : styles.inline, className)} {...props}/>;
