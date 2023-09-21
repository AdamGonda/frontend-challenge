import React from 'react';
import SearchBar from './SearchBar';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';

function Navigation() {
  const router = useRouter();

  return (
    <Header>
      <Image
        priority
        src="/images/logo.svg"
        width="145"
        height="48"
        alt="logo"
      />
      {router.pathname === '/' && <SearchBar />}
    </Header>
  );
}

export default Navigation;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 24px 152px;
  background-color: #f5f5f5;

  img {
    margin-right: 142px;
  }
`;
