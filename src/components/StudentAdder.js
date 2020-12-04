import React, { Component } from 'react';
import * as api from './api';

class StudentAdder extends Component {
  state = {
    name: '',
    startingCohort: 25,
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleAdd = (event) => {
    event.preventDefault();
    // api post request
    api.postStudent(this.state).then((student) => {
      this.props.addToFundamentals(student);
      this.setState({
        name: '',
        startingCohort: 25,
      });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAdd}>
          <label>
            Name:{' '}
            <input
              type='text'
              id='name'
              onChange={this.handleChange}
              value={this.state.name}
              required
            ></input>
            <br></br>
          </label>
          <label>
            Cohort:{' '}
            <input
              type='number'
              id='startingCohort'
              onChange={this.handleChange}
              value={this.state.startingCohort}
              required
            ></input>{' '}
            <br></br>
          </label>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default StudentAdder;
