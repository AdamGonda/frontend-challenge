import React from 'react';
import { useReactiveVar } from '@apollo/client';
import { QueryParams, queryParamsVar } from '../lib/apolloClient';
import { setSortByQuery } from './QueryParamsManager';
import styled from 'styled-components';
interface SortByProps {
  result: number;
  total: number;
}

function SortBy({ result, total}: SortByProps) {
  const queryParams = useReactiveVar(queryParamsVar);

  return (
    <Wrap>
      <p>Showing {result} of {total} items</p>
      <div>
        <span>Order</span>
        <select
          value={queryParams.sortBy}
          onChange={(e) => setSortByQuery(queryParams, e.target.value as QueryParams['sortBy'])}
        >
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
        </select>
      </div>
    </Wrap>
  );
}

export default SortBy;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid #E5E5E5;
  padding: 16px;

  select {
    cursor: pointer;
    border: none;
  }

  span {
    font-weight: 500;
    margin-right: 10px;
  }
`;
