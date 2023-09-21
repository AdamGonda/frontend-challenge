import { useReactiveVar } from '@apollo/client';
import React from 'react';
import { queryParamsVar } from '../lib/apolloClient';
import { setNameQuery } from './QueryParamsManager';

function SearchBar() {
  const filters = useReactiveVar(queryParamsVar);

  return (
    <input
      type="text"
      placeholder="Search by name"
      value={filters.name}
      onChange={(e) =>
        setNameQuery(
          filters,
          e.target.value ? e.target.value.toLowerCase() : ''
        )
      }
    />
  );
}

export default SearchBar;
