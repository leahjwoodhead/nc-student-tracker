import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
`;

const ListItem = styled.li`
  list-style: none;
  border: 2px inset;
  width: 200px;
  height: 200px;
  margin: 20px;
  border-radius: 5px;
  background-color: ${(props) => {
    const { block } = props;
    if (block === 'be') {
      return '#007aff';
    } else if (block === 'fe') {
      return '#eb1b24;';
    } else if (block === 'proj') {
      return 'yellow';
    } else if (block === 'fun') {
      return 'green';
    }
  }};
`;

const Grid = (props) => {
  return (
    <div>
      <GridContainer>
        {props.students.map((student) => {
          return (
            <ListItem key={student._id} block={student.currentBlock}>
              <h2>{student.name}</h2>
              <p>
                Starting Cohort: {student.startingCohort}
                <br />
                Current Block: {student.currentBlock}
              </p>
            </ListItem>
          );
        })}
      </GridContainer>
    </div>
  );
};

export default Grid;
