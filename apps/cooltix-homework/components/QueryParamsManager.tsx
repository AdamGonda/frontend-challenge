import { useEffect } from 'react';
import router from 'next/router';
import { type QueryParams, queryParamsVar } from '../lib/apolloClient';
import useRouter from '../lib/useRouterHook';

const QueryParamsManager = () => {
  const router = useRouter();

  useEffect(() => {
    syncQuery();
  }, [router.query]);

  return null;
};

export default QueryParamsManager;

function syncQuery() {
  const states = (router.query.states || '') as string;
  const sortBy = (router.query.sortBy || '') as QueryParams['sortBy'];
  const name = (router.query.name || '') as string;

  queryParamsVar({ states, sortBy, name });
}

export function setStateQuery(queryParams: QueryParams, state: string) {
  const newQuery: Partial<QueryParams> = {};
  let newStates = [];

  if (queryParams.states.includes(state)) {
    newStates = queryParams.states.split(',').filter((s) => s !== state);
  } else {
    newStates = [...queryParams.states.split(',').filter((s) => s !== ''), state];
  }

  if (newStates.length) {
    newQuery.states = newStates.join(',');
  }

  if (queryParams.sortBy) {
    newQuery.sortBy = queryParams.sortBy;
  }

  if (queryParams.name) {
    newQuery.name = queryParams.name;
  }

  router.push({
    pathname: '/',
    query: newQuery,
  });
}

export function setSortByQuery(
  queryParams: QueryParams,
  sortBy: QueryParams['sortBy'] = 'firstName'
) {
  const newQuery: Partial<QueryParams> = {};

  if (queryParams.states !== '') {
    newQuery.states = queryParams.states;
  }

  newQuery.sortBy = sortBy;

  if (queryParams.name) {
    newQuery.name = queryParams.name;
  }

  router.push({
    pathname: '/',
    query: newQuery,
  });
}

export function setNameQuery(queryParams: QueryParams, name: string) {
  const newQuery: Partial<QueryParams> = {};

  if (queryParams.states !== '') {
    newQuery.states = queryParams.states;
  }

  if (queryParams.sortBy) {
    newQuery.sortBy = queryParams.sortBy;
  }

  if (name) {
    newQuery.name = name;
  }

  router.push({
    pathname: '/',
    query: newQuery,
  });
}
