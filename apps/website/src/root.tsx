import { PropsWithChildren } from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { Container, Footer, NavBar, NavLink } from '@mitchlui/components';
import '@mitchlui/components/styles.css';

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'CV', href: '/cv.pdf', external: true },
  { label: 'LinkedIn', href: '/linkedin' }
];

const footerLinks: NavLink[] = [
  { label: 'Work', href: '/work' },
  { label: 'CV', href: '/cv.pdf', external: true },
  { label: 'LinkedIn', href: '/linkedin' },
  { label: 'GitHub', href: '/github' },
  { label: 'Sitemap', href: '/sitemap' }
];

export const Layout = ({ children }: PropsWithChildren) =>
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F7F5EF" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0C1210" />
      <link rel="icon" href="/favicon.ico" sizes="48x48" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
    </body>
  </html>;

export default function Root() {
  return (
    <>
      <NavBar links={navLinks}/>
      <Container>
        <Outlet/>
        <Footer owner="Mitch Lui" place="Hong Kong ↔ London" stamp="呂家天" links={footerLinks}/>
      </Container>
    </>
  );
}
