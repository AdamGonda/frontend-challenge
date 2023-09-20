import { useQuery } from '@apollo/client';
import Link from 'next/link';
import GET_ALL_MEMBERS from '../graphql/queries/getAllMembers.graphql';
import toast from 'react-hot-toast';

export function Index() {
  const { loading, error, data } = useQuery(GET_ALL_MEMBERS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    toast.error('Something went wrong');
    
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      {data.allMembers.map((member) => (
        <Link key={member.id} href={`/member/${member.id}`}>
          <p>{member.firstName}</p>
        </Link>
      ))}
    </div>
  );
}

export default Index;
