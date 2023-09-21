import { useReactiveVar } from '@apollo/client';
import React from 'react';
import { queryParamsVar } from '../lib/apolloClient';
import { setNameQuery } from './QueryParamsManager';
import styled from 'styled-components';
import Image from 'next/image';

function SearchBar() {
  const queryParams = useReactiveVar(queryParamsVar);

  return (
    <Wrap>
      <Image priority src="/icons/magnifier.svg" width={24} height={24} alt="search icon" />
      <input
        type="text"
        placeholder="Search"
        value={queryParams.name}
        onChange={(e) =>
          setNameQuery(
            queryParams,
            e.target.value ? e.target.value.toLowerCase() : ''
          )
        }
      />
    </Wrap>
  );
}

export default SearchBar;

const Wrap = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 12px;
    left: 15px;
  }

  input {
    width: 500px;
    height: 43px;
    border-radius: 32px;
    border: 1px solid #b0b0b0;
    padding-left: 45px;
    font-family: Quicksand;
    font-size: 16px;
  }
`;
