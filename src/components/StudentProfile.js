import React from 'react';
import styled from 'styled-components';

const ProfileCard = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 1rem;
  margin: 2rem;
  font-size: 1.5rem;
  text-align: center;
`;

const StudentProfile = (props) => {
  return (
    <div className='outerBlock'>
      <ProfileCard>
        <h1>Hello</h1>
      </ProfileCard>
    </div>
  );
};

export default StudentProfile;
