import { Link } from 'react-router';
import styles from './Copyright.module.css';

function getCurrentYear(): number {
  return new Date().getFullYear();
}

export const Copyright = () =>
  <section className={styles.copyright}>
    Copyright © {getCurrentYear()} Mitch Lui. All rights reserved.
    <p><Link to={'/sitemap'}>Sitemap</Link></p>
  </section>;
