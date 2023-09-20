import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import GET_MEMBER_BY_ID from '../../graphql/queries/getMemberById.graphql';
import toast from 'react-hot-toast';

function Member() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_MEMBER_BY_ID, {
    skip: !id,
    variables: { id },
  });

  if (loading || !data) return <div>Loading...</div>;
  if (error) {
    toast.error('Something went wrong');
    return <p>Something went wrong</p>;
  }
  if (!data.member) return <div>No member data available</div>;

  const memberDetails = data.member;

  return (
    <div>
      <h1>
        {memberDetails.firstName} {memberDetails.lastName}
      </h1>
      <p>Email: {memberDetails.email}</p>
      <p>Phone: {memberDetails.phoneNumber}</p>
    </div>
  );
  return <p>hello</p>;
}

export default Member;
