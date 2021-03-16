import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import 'nprogress/nprogress.css';
import '../components/styles/npogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.start());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}