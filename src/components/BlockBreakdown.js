import React, { Component } from 'react';
import * as api from './api';
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
    api.fetchStudents(false).then((studentsData) => {
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

  advanceStudent = (studentId) => {
    api.editStudentProgress(studentId, true).then((student) => {
      console.log(student);
      this.setState((currState) => {
        // removes student from old block
        const fundamentals = currState.fundamentals.filter(
          (person) => person._id !== student._id
        );
        const backend = currState.backend.filter(
          (person) => person._id !== student._id
        );
        const frontend = currState.frontend.filter(
          (person) => person._id !== student._id
        );
        const project = currState.project.filter(
          (person) => person._id !== student._id
        );
        console.log(student);

        if (
          student.blockHistory[student.blockHistory.length - 1].slug === 'be'
        ) {
          console.log(student);
          // student.currentBlock = 'be';
          backend.unshift(student);
        } else if (
          student.blockHistory[student.blockHistory.length - 1].slug === 'fe'
        ) {
          // student.currentBlock = 'fe';
          frontend.unshift(student);
        } else if (
          student.blockHistory[student.blockHistory.length - 1].slug === 'proj'
        ) {
          // student.currentBlock = 'proj';
          project.unshift(student);
        }
        // else if (student.currentBlock === 'proj') {
        //   console.log('GRADUATED!');
        // }

        const newState = {
          fundamentals: fundamentals,
          backend: backend,
          frontend: frontend,
          project: project,
        };
        return newState;
      });
    });
  };

  resitStudent = (studentId) => {
    api.editStudentProgress(studentId, false).then((student) => {
      console.log(student);
    });
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className='outerBlock'>
        <Block
          block='Fundamentals'
          students={this.state.fundamentals}
          advanceStudent={this.advanceStudent}
          resitStudent={this.resitStudent}
        />
        <Block
          block='Backend'
          students={this.state.backend}
          advanceStudent={this.advanceStudent}
          resitStudent={this.resitStudent}
        />
        <Block
          block='Frontend '
          students={this.state.frontend}
          advanceStudent={this.advanceStudent}
          resitStudent={this.resitStudent}
        />
        <Block
          block='Project'
          students={this.state.project}
          advanceStudent={this.advanceStudent}
          resitStudent={this.resitStudent}
        />
      </div>
    );
  }
}

export default BlockBreakdown;
