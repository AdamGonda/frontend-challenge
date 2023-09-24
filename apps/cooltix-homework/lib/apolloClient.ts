import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export interface QueryParams {
  name: string;
  states: string;
  sortBy: 'firstName' | 'lastName';
}

export const queryParamsVar = makeVar<QueryParams>({
  states: '',
  sortBy: 'firstName',
  name: '',
});

export const filteredAndSortedMembersVar = makeVar({
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
          queryParams: {
            read() {
              return queryParamsVar();
            },
          },
          filteredMembers: {
            read() {
              return filteredAndSortedMembersVar();
            },
          },
        },
      },
    },
  }),
});

export default apolloClient;
