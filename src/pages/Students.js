import React, { Component } from 'react';
import Grid from '../components/Grid';
import fetchStudents from '../components/api';

class Students extends Component {
  state = {
    allStudents: [],
    displayedStudents: [],
    isLoading: true,
  };

  componentDidMount() {
    fetchStudents(false).then((students) => {
      this.setState({
        allStudents: students,
        displayedStudents: students,
        isLoading: false,
      });
    });
  }

  handleBlockFilter = (event) => {
    if (event.target.value === 'all') {
      this.setState((currState) => {
        const newState = {
          displayedStudents: currState.allStudents,
        };
        return newState;
      });
    } else {
      this.setState((currState) => {
        const newState = {
          displayedStudents: currState.allStudents.filter(
            (student) => student.currentBlock === event.target.value
          ),
        };
        return newState;
      });
    }
  };

  render() {
    const { displayedStudents, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h3>Filter by block:</h3>
        <select onChange={this.handleBlockFilter}>
          <option value='all'>Everyone</option>
          <option value='fun'>Fundamentals</option>
          <option value='be'>Backend</option>
          <option value='fe'>Frontend</option>
          <option value='proj'>Project</option>
        </select>
        <Grid students={displayedStudents} />
      </div>
    );
  }
}

export default Students;
