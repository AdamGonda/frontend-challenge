import React, { useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import { queryParamsVar } from '../lib/apolloClient';
import { setStateQuery } from '../components/QueryParamsManager';
import styled from 'styled-components';

const USStates = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

function Filters() {
  const [showAll, setShowAll] = useState(false);
  const queryParams = useReactiveVar(queryParamsVar);

  const displayedStates = showAll ? USStates : USStates.slice(0, 5);

  return (
    <Wrap>
      {displayedStates.map((state: string) => (
        <div key={state}>
          <label
            htmlFor="state"
            data-test-id={'filter-option=' + state}
            onClick={() => setStateQuery(queryParams, state)}
          >
            <input
              name="state"
              type="checkbox"
              checked={queryParams.states.includes(state)}
              readOnly
            />
            {state}
          </label>
        </div>
      ))}
      {!showAll && <button onClick={() => setShowAll(true)}>More</button>}
      {showAll && <button onClick={() => setShowAll(false)}>Less</button>}
    </Wrap>
  );
}

const Wrap = styled.div`
  button {
    border: none;
    background: none;
    text-decoration: underline;
    cursor: pointer;
    font-family: Quicksand;
  }

  label {
    display: block;
    cursor: pointer;
    font-family: Quicksand;
    user-select: none;
  }

  input {
    cursor: pointer;
  }
`;

export default Filters;
