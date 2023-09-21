import { useEffect } from 'react';
import router, { useRouter } from 'next/router';
import { queryParamsVar } from '../lib/apolloClient';

const QueryParamsManager = () => {
  const router = useRouter();  

  useEffect(() => {
    const states = router.query.states?.split(',') || [];
    const sortBy = router.query.sortBy || '';
    const name = router.query.name || '';
    queryParamsVar({ states, sortBy, name });
  }, [router.query]);

  return null;
};

export default QueryParamsManager;

export function toggleStateQuery(filters, state) {
  const newQuery = {};
  let newStates = [];

  if (filters.states.includes(state)) {
    newStates = filters.states.filter((s) => s !== state);
  } else {
    newStates = [...filters.states, state];
  }

  if (newStates.length) {
    newQuery.states = newStates.join(',');
  }
  if (filters.sortBy) {
    newQuery.sortBy = filters.sortBy;
  }
  if (filters.name) {
    newQuery.name = filters.name;
  }

  router.push({
    pathname: '/',
    query: newQuery,
  });
}

export function setSortByQuery(filters, sortBy = 'firstName') {
  const newQuery = {};

  if (filters.states.length) {
    newQuery.states = filters.states.join(',');
  }

  newQuery.sortBy = sortBy;
  
  if (filters.name) {
    newQuery.name = filters.name;
  }

  router.push({
    pathname: '/',
    query: newQuery,
  });
}

export function setNameQuery(filters, name) {
  const newQuery = {};

  if (filters.states.length) {
    newQuery.states = filters.states.join(',');
  }

  if (filters.sortBy) {
    newQuery.sortBy = filters.sortBy;
  }

  newQuery.name = name;

  router.push({
    pathname: '/',
    query: newQuery,
  });
}

