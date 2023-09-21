import React from 'react';
import styled from 'styled-components';
import {shineAnimation} from '../styles/sharedStyles'

function DetailsSkeleton() {
  return (
    <Wrap>
      <div className="circle" />
      <div className="large-line" />
      <div className="medium-line" />
      <div className="medium-line" />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .circle,
  .large-line,
  .medium-line {
    border-radius: 50px;
    background-color: #f5f5f5;
    ${shineAnimation}
  }

  .circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .large-line,
  .medium-line {
    margin-top: 24px;
  }

  .large-line {
    width: 350px;
    height: 36px;
    margin-bottom: 24px;
  }

  .medium-line {
    width: 250px;
    height: 26px;
  }
`;

export default DetailsSkeleton;
