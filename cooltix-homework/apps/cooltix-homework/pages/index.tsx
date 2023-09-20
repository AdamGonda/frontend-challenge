import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';

const GET_ALL_MEMBERS = gql`
  {
    allMembers {
      id
      firstName
      lastName
      email
      address {
        country
        state
        postalCode
        city
        addressLine
      }
      phoneNumber
      profilePictureUrl
    }
  }
`;

export function Index() {
  const { loading, error, data } = useQuery(GET_ALL_MEMBERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
