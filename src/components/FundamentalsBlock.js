import React from 'react';
import styled from 'styled-components';

const BlockSection = styled.ul`
    background-color: maroon;
    margin: 10px;
    width: 20%;
`
const StudentCard = styled.li`
    background-color: white;
    list-style: none;
    box-shadow: 2px 2px 5px grey;
`

const Block = (props) => {
    return (
        <BlockSection>
            {props.students.map(student => { 
                return (
                    <StudentCard key={student._id}>
                        <p>{student.name}</p>
                    </StudentCard>
                )
            })}
        </BlockSection>
    );
};

export default Block;