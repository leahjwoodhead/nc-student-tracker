import React from 'react';
import styled from 'styled-components';

const BlockSection = styled.ul`
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 1rem;
  margin: 2rem;
  font-size: 1.5rem;
  text-align: center;
`;
const StudentCard = styled.li`
  background-color: white;
  font-size: 14px;
  list-style-type: none;
  width: 80%;
  margin: 1rem auto;
  padding: 0.5rem;
  box-shadow: 2px 2px 5px grey;
`;

const Block = (props) => {
  return (
    <BlockSection>
      <p>
        Students in <strong>{props.block}</strong>: {props.students.length}
      </p>
      {props.students.map((student) => {
        return (
          <StudentCard key={student._id}>
            <h3>{student.name}</h3>
            <p>{student.currentBlock}</p>
            <button
              onClick={() => {
                props.advanceStudent(student._id);
              }}
            >
              Advance
            </button>
            <button
              id='progress-button'
              onClick={() => {
                console.log('Clicked to resit');
                props.resitStudent(student._id);
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
