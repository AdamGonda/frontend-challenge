import React from 'react'
import { useReactiveVar } from '@apollo/client';
import { queryParamsVar } from '../lib/apolloClient';
import { setSortByQuery } from './QueryParamsManager';

function Sort() {
  const filters = useReactiveVar(queryParamsVar);

  return (
    <div>
      <p>Order</p>
      <select
        value={filters.sortBy}
        onChange={(e) => setSortByQuery(filters, e.target.value)}
      >
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
      </select>
    </div>
  )
}

export default Sort