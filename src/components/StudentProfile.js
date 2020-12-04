import React, { Component } from 'react';
import styled from 'styled-components';
import * as api from './api'

const ProfileCard = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 1rem;
  margin: 2rem;
  font-size: 1.5rem;
  text-align: center;
`;

class StudentProfile extends Component {

  state = {
    name: '',
    blockHistory: [],
    startingCohort: 0,
    id: ''
  }

  componentDidMount () {
    const { student_id } = this.props
    api.fetchOneStudent(student_id).then(student => {
      this.setState((currState) => {
        const newState = { 
          name: student.name,
          blockHistory: [...student.blockHistory],
          startingCohort: student.startingCohort,
          id: student._id
        }
        return newState
      })
    })
    
  }

  render() {
    const { name, blockHistory, startingCohort, id } = this.state
    const blockNames = blockHistory.map(block => block.name)
    const lastBlock = blockNames[blockNames.length - 1]

    return (
      <div className='outerBlock'>
      <ProfileCard>
        <h1>{name}</h1>
        <p>Current Block: {lastBlock}</p>
        <p>Starting Cohort: {startingCohort}</p>
        <p>Student Id: {id}</p> 
        <p>Modules Resatted:</p>
        <ul>
          {api.countRepeats(blockNames).map(block=> {
            return (<li>{block}</li>)
            }
          )}
        </ul>
        
      </ProfileCard>
    </div>
    );
  }
}

export default StudentProfile;
