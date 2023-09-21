import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const queryParamsVar = makeVar({
  states: [],
  sortBy: '',
  name: '',
});

const apolloClient = new ApolloClient({
  uri: 'https://frontend-challenge.dev.cooltix.com',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          filters: {
            read() {
              return queryParamsVar();
            }
          }
        }
      }
    }
  })
});

export default apolloClient;