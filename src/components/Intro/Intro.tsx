import { AnchorHTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';
import styles from './Intro.module.css';

export const Intro = (): ReactElement =>
  <div className={styles.intro}>
    Born and raised in Hong Kong, I am now based in London as a Senior Software Engineer at <CompanyLink className={styles.wise} href="https://www.wise.com">Wise&apos;s</CompanyLink> Business Account Management Team to help create the <b>one account for businesses to thrive everywhere</b>.
  </div>;

const CompanyLink = ({ className, href, children }: AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement =>
  <a className={clsx(styles.link, className)} target={'_blank'} rel={'noreferrer'} href={href}>{children}</a>;
