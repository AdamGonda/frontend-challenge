import { useQuery, useReactiveVar } from '@apollo/client';
import { Member } from '../graphql/types';
import { type QueryParams, queryParamsVar } from '../lib/apolloClient';
import styled from 'styled-components';
import GET_ALL_MEMBERS from '../graphql/queries/getAllMembers.graphql';
import toast from 'react-hot-toast';
import SortBy from './SortBy';
import ListItem from './ListItem';
import MemberListSkeleton from './MemberListSkeleton';

export function MemberList() {
  const { loading, error, data } = useQuery(GET_ALL_MEMBERS);
  const queryParams = useReactiveVar(queryParamsVar);

  if (error) {
    toast.error('Something went wrong');

    return <p>Something went wrong</p>;
  }

  const result = getFilteredAndSortedMembers(queryParams, data?.allMembers);

  return (
    <Wrap>
      <SortBy result={result.length} total={data?.allMembers.length} />
      <div id="list-items">
        {loading ? (
          <MemberListSkeleton />
        ) : (
          result.map((member: Member) => (
            <ListItem key={member.id} member={member} />
          ))
        )}
      </div>
    </Wrap>
  );
}

export default MemberList;

function getFilteredAndSortedMembers(
  queryParams: QueryParams,
  members: Member[]
) {
  if (!members) return [];

  const filteredMembers = members.filter((member: Member) => {
    const combinedName = `${member.firstName} ${member.lastName}`.toLowerCase();
    if (
      queryParams.name &&
      !combinedName.includes(queryParams.name.toLowerCase())
    ) {
      return false;
    }

    if (
      queryParams.states.length &&
      !queryParams.states.includes(member.address.state)
    ) {
      return false;
    }

    return true;
  });

  return [...filteredMembers].sort((a, b) => {
    if (a[queryParams.sortBy] > b[queryParams.sortBy]) return 1;
    if (a[queryParams.sortBy] < b[queryParams.sortBy]) return -1;
    return 0;
  });
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  #list-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(269px, 1fr));
    gap: 16px;
  }
`;
