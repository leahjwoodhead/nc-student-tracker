import React from 'react';
import styled from 'styled-components';

const BlockSection = styled.ul`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
  text-align: center;
`;
const StudentCard = styled.li`
  background-color: white;
  list-style-type: none;
  width: 80%;
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 2px 2px 5px grey;
`;

const Block = (props) => {
  console.log(props);
  return (
    <BlockSection>
      <p>
        Students in <strong>{props.block}</strong>: {props.students.length}
      </p>
      {props.students.map((student) => {
        return (
          <StudentCard key={student._id}>
            <p>{student.name}</p>
            <div
              onClick={() => {
                props.removeFromBlock(student)}}
            >
              <button
              >
                Advance
              </button>
            </div>
            <button
              id='progress-button'
              onClick={() => {
                console.log('Clicked to resit');
                props.resitStudent();
              }}
            >
              Resit
            </button>
          </StudentCard>
        );
      })}
    </BlockSection>
  );
};

export default Block;
