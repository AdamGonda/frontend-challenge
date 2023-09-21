import React, { useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import { queryParamsVar } from '../lib/apolloClient';
import { toggleStateQuery } from '../components/QueryParamsManager';

const USStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

function Filters() {
  const [showAll, setShowAll] = useState(false);
  const filters = useReactiveVar(queryParamsVar);

  const displayedStates = showAll ? USStates : USStates.slice(0, 5);

  return (
    <>
      {displayedStates.map((state) => (
        <div key={state}>
          <input
            type="checkbox"
            checked={filters.states.includes(state)}
            onChange={() => toggleStateQuery(filters, state)}
          />
          <label>{state}</label>
        </div>
      ))}
      {!showAll && <button onClick={() => setShowAll(true)}>Show All</button>}
      {showAll && <button onClick={() => setShowAll(false)}>Hide All</button>}
    </>
  );
}

export default Filters;
