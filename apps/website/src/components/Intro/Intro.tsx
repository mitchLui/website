import { AnchorHTMLAttributes, ReactElement } from 'react';
import { externalLink } from '@mitchlui/components';
import styles from './Intro.module.css';

export const Intro = (): ReactElement =>
  <section className={styles.intro}>
    <p className={styles.now}><span className={styles.dot} aria-hidden="true"/>Now at Wise · London</p>
    <h1 className={styles.headline}>Building the one account for businesses to thrive everywhere.</h1>
    <p className={styles.lede}>
      Born and raised in Hong Kong, now based in London. I&apos;m a Senior Software Engineer on <CompanyLink href="https://www.wise.com">Wise&apos;s</CompanyLink> Business Account Management team.
    </p>
  </section>;

const CompanyLink = ({ href, children }: AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement =>
  <a className={styles.link} href={href} {...externalLink}>{children}</a>;
