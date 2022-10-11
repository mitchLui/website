import Link from 'next/link';
import React from 'react';
import copyrightFooterStyles from './CopyrightFooter.module.scss';

const CopyrightFooter = (): React.ReactElement =>
  <section className={copyrightFooterStyles.main}>
        Copyright © {new Date().getFullYear()} Mitch Lui. All rights reserved.
    <p><Link href={'/sitemap'}>Sitemap</Link></p>
  </section>;

export default CopyrightFooter;