import { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apolloClient';
import './styles.css';
import { Toaster } from 'react-hot-toast';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to cooltix-homework!</title>
      </Head>
      <main className="app">
        <ApolloProvider client={apolloClient}>
          <Toaster/>
          <Component {...pageProps} />
        </ApolloProvider>
      </main>
    </>
  );
}

export default CustomApp;
