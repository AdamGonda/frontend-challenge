import React from 'react';
import styled from 'styled-components';
import { shineAnimation } from '../styles/sharedStyles';

const PLACEHOLDERS = 5;

function MemberListSkeleton() {
  return (
    <>
      {Array.from({ length: PLACEHOLDERS }).map((_, index) => (
        <ListItem key={index}>
          <div className="circle" />
          <div className="large-line" />
          <div className="medium-line" />
          <div className="medium-line" />
        </ListItem>
      ))}
    </>
  );
}

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  padding: 40px 16px;
  cursor: pointer;
  line-height: 24px;

  .circle,
  .large-line,
  .medium-line {
    border-radius: 50px;
    background-color: #f5f5f5;
    ${shineAnimation}
  }

  .circle {
    width: 97px;
    height: 97px;
    border-radius: 50%;
  }

  .large-line {
    margin-top: 24px;
  }

  .large-line {
    width: 180px;
    height: 26px;
    margin-bottom: 8px;
  }

  .medium-line {
    width: 150px;
    height: 26px;
    margin-top: 16px;
  }
`;

export default MemberListSkeleton;
