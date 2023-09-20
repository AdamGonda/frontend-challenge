import React from 'react'
import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';

const GET_MEMBER_BY_ID = gql`
  query GetMemberById($id: ID!) {
    member(id: $id) {
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


function Member() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_MEMBER_BY_ID, {
    skip: !id,  // Skip the query if id is not available yet
    variables: { id }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const memberDetails = data.member;

  return (
    <div>
      <h1>{memberDetails.firstName} {memberDetails.lastName}</h1>
      <p>Email: {memberDetails.email}</p>
      <p>Phone: {memberDetails.phoneNumber}</p>
      {/* Display other member details as needed */}
    </div>
  );
}

export default Member;
