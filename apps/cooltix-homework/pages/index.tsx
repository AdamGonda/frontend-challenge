import MainLayout from '../layout/MainLayout';
import styled from 'styled-components';
import MemberList from '../components/MemberList';
import Filters from '../components/Filters';
import { fadeInAnimation } from '../styles/sharedStyles';

export function Index() {
  return (
    <MainLayout>
      <Wrap>
        <h1>Members</h1>

        <div id="grid">
          <Filters />

          <main>
            <MemberList />
          </main>
        </div>
      </Wrap>
    </MainLayout>
  );
}

export default Index;

const Wrap = styled.div`
  ${fadeInAnimation}

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  #grid {
    margin-top: 64px;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`;
