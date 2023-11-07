import { Link } from 'react-router-dom';
import React from 'react';
import './copyright.scss';

function getCurrentYear (): number {
  return new Date().getFullYear();
}

export const Copyright = (): React.ReactElement =>
  <section className={'copyright'}>
        Copyright © {getCurrentYear()} Mitch Lui. All rights reserved.
    <p><Link to={'/sitemap'}>Sitemap</Link></p>
  </section>;
