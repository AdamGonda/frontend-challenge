import { useQuery, useReactiveVar } from '@apollo/client';
import Link from 'next/link';
import GET_ALL_MEMBERS from '../graphql/queries/getAllMembers.graphql';
import toast from 'react-hot-toast';
import { Member } from '../graphql/types';
import { SearchBar, Filters, Sort } from '../components';
import { queryParamsVar } from '../lib/apolloClient';

export function Index() {
  const { loading, error, data } = useQuery(GET_ALL_MEMBERS);
  const filters = useReactiveVar(queryParamsVar);

  if (loading) return <p>Loading...</p>;
  if (error) {
    toast.error('Something went wrong');

    return <p>Something went wrong</p>;
  }

  const filteredMembers = data.allMembers.filter((member: Member) => {
    const combinedName = `${member.firstName} ${member.lastName}`.toLowerCase();
    if (filters.name && !combinedName.includes(filters.name.toLowerCase())) {
      return false;
    }

    if (
      filters.states.length &&
      !filters.states.includes(member.address.state)
    ) {
      return false;
    }

    return true;
  });

  const sortedMembers = [...filteredMembers].sort((a, b) => {
    if (a[filters.sortBy] > b[filters.sortBy]) return 1;
    if (a[filters.sortBy] < b[filters.sortBy]) return -1;
    return 0;
  });

  return (
    <div>
      <SearchBar />
      <Filters />
      <Sort />
      {sortedMembers.map((member: Member) => (
        <Link key={member.id} href={`/member/${member.id}`}>
          <div style={{ border: '1px solid black', marginBottom: 5 }}>
            <p>{member.firstName + ' ' + member.lastName}</p>
            <p>{member.address.state}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Index;
