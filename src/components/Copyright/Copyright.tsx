import { Link } from 'react-router';
import styles from './Copyright.module.css';

function getCurrentYear(): number {
  return new Date().getFullYear();
}

export const Copyright = () =>
  <section className={styles.copyright}>
    © {getCurrentYear()} Mitch Lui
    <p><Link to={'/sitemap'}>Sitemap</Link></p>
  </section>;
