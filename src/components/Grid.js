import React from 'react';
import styled from 'styled-components'

const GridContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
`;

const ListItem = styled.li`
    list-style: none;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    margin: 20px;
`

const Grid = (props) => {
    return (
        <div>
               <GridContainer>
                    {props.students.map(student => {
                        return (
                            <ListItem key={student._id}>
                                <h2>{student.name}</h2>
                                <p>Starting Cohort: {student.startingCohort}<br/>Current Block: {student.currentBlock}</p>
                            </ListItem>
                        )
                    })}
                </GridContainer>
        </div>
    );
};

export default Grid;