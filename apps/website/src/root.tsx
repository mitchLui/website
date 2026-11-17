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
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
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
