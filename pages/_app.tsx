import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import CopyrightFooter from '../components/CopyrightFooter';

const DynamicNavBar = dynamic(() => import('../components/NavBar'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <><DynamicNavBar/><Component {...pageProps} /><CopyrightFooter/></>;
}

export default MyApp;
