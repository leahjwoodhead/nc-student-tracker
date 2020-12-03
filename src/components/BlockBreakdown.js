import React, { Component } from 'react';
import { fetchStudents } from './api';
import Block from './Block';

class BlockBreakdown extends Component {
  state = {
    students: [],
    fundamentals: [],
    backend: [],
    frontend: [],
    project: [],
    isLoading: true,
  };

  componentDidMount() {
    fetchStudents(false).then((studentsData) => {
      const students = studentsData;
      const fundamentals = students.filter(
        (student) => student.currentBlock === 'fun'
      );
      const backend = students.filter(
        (student) => student.currentBlock === 'be'
      );
      const frontend = students.filter(
        (student) => student.currentBlock === 'fe'
      );
      const project = students.filter(
        (student) => student.currentBlock === 'proj'
      );
      this.setState({
        students,
        fundamentals,
        backend,
        frontend,
        project,
        isLoading: false,
      });
    });
  }

  // Removes student from current block
  removeFromBlock = (studentId) => {
    this.setState((currState) => {
      const newState = {
        fundamentals: currState.fundamentals.filter(
          (person) => person._id !== studentId
        ),
        backend: currState.backend.filter((person) => person._id !== studentId),
        frontend: currState.frontend.filter(
          (person) => person._id !== studentId
        ),
        project: currState.project.filter((person) => person._id !== studentId),
      };
      return newState;
    });
  };

  // Students can only advance to the block after
  // ['Fundamentals','Backend','Frontend','Project']
  // [1,2,3,4]
  // takes student object as argument
  // e.g. IF student.currentBlock === 'fun', this.state.backend.unshift(student)

  advanceStudent = (student) => {
    this.setState((currState) => {
      const fundamentals = currState.fundamentals;
      const backend = currState.backend;
      const frontend = currState.frontend;
      const project = currState.project;

      if (student.currentBlock === 'fun') {
        backend.unshift(student);
      } else if (student.currentBlock === 'be') {
        frontend.unshift(student);
      } else if (student.currentBlock === 'fe') {
        project.unshift(student);
      } else if (student.currentBlock === 'proj') {
        console.log('GRADUATED!');
      }

      const newState = {
        backend: backend,
        frontend: frontend,
        project: project,
      };
      return newState;
    });
  };

  resitStudent = () => {};

  render() {
    const { students, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className='outerBlock'>
        <Block
          block='Fundamentals'
          students={this.state.fundamentals}
          removeFromBlock={this.removeFromBlock}
          advanceStudent={this.advanceStudent}
          resitStudent={this.resitStudent}
        />
        <Block
          block='Backend'
          students={this.state.backend}
          removeFromBlock={this.removeFromBlock}
          advanceStudent={this.advanceStudent}
          resitStudent={this.resitStudent}
        />
        <Block
          block='Frontend '
          students={this.state.frontend}
          removeFromBlock={this.removeFromBlock}
          advanceStudent={this.advanceStudent}
          resitStudent={this.resitStudent}
        />
        <Block
          block='Project'
          students={this.state.project}
          removeFromBlock={this.removeFromBlock}
          advanceStudent={this.advanceStudent}
          resitStudent={this.resitStudent}
        />
      </div>
    );
  }
}

export default BlockBreakdown;
