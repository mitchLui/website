import { PropsWithChildren } from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { NavBar } from './components/NavBar/NavBar';
import { Container } from './layouts/Container/Container';
import './index.css';
import './App.scss';

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
      <div className={'App'}>{children}</div>
      <ScrollRestoration />
      <Scripts />
    </body>
  </html>;

export default function Root() {
  return (
    <>
      <NavBar/>
      <Container><Outlet/></Container>
    </>
  );
}
