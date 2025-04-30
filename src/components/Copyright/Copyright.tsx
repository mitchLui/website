import { Link } from 'react-router-dom';
import './Copyright.scss';

function getCurrentYear(): number {
  return new Date().getFullYear();
}

export const Copyright = () =>
  <section className={'copyright'}>
        Copyright © {getCurrentYear()} Mitch Lui. All rights reserved.
    <p><Link to={'/sitemap'}>Sitemap</Link></p>
  </section>;
