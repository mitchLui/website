import { ReactElement } from 'react';
import { Eyebrow, NewTabHint, TextLink, externalLink } from '@mitchlui/components';
import styles from './Intro.module.css';

export const Intro = (): ReactElement =>
  <section className={styles.intro}>
    <Eyebrow line="wise" marker="dot">Now at Wise · London</Eyebrow>
    <h1 className={styles.headline}>Building the one account for businesses to thrive everywhere.</h1>
    <p className={styles.lede}>
      Born and raised in Hong Kong, now based in London. I&apos;m a Senior Software Engineer on <TextLink to="https://www.wise.com" {...externalLink}>Wise&apos;s<NewTabHint/></TextLink> Business Account Management team.
    </p>
  </section>;
