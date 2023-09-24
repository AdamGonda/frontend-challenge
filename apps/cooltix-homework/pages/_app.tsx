import { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apolloClient';
import { Toaster } from 'react-hot-toast';
import QueryParamsManager from '../components/QueryParamsManager';
import GlobalStyles from '../styles/GlobalStyles';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Members only 😎</title>
      </Head>
      <main>
          <ApolloProvider client={apolloClient}>
            <Toaster />
            <QueryParamsManager />
            <Component {...pageProps} />
          </ApolloProvider>
      </main>
    </>
  );
}

export default CustomApp;
