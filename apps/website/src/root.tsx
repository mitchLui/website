import { PropsWithChildren } from 'react';
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { Container, Copyright, NavBar, NavLink } from '@mitchlui/components';
import '@mitchlui/components/styles.css';

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'CV', href: '/cv.pdf', external: true },
  { label: 'LinkedIn', href: '/linkedin' }
];

export const Layout = ({ children }: PropsWithChildren) =>
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FAF7F2" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0B0D10" />
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
        <Copyright owner="Mitch Lui"><Link to="/sitemap">Sitemap</Link></Copyright>
      </Container>
    </>
  );
}
