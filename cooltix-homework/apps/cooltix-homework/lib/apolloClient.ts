import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://frontend-challenge.dev.cooltix.com',
  cache: new InMemoryCache()
});

export default apolloClient;