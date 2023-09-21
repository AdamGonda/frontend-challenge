import { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apolloClient';
import './styles.css';
import { Toaster } from 'react-hot-toast';
import QueryParamsManager from '../components/QueryParamsManager';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cooltix Homework</title>
      </Head>
      <main className="app">
        <ApolloProvider client={apolloClient}>
          <Toaster/>
          <QueryParamsManager/>
          <Component {...pageProps} />
        </ApolloProvider>
      </main>
    </>
  );
}

export default CustomApp;
