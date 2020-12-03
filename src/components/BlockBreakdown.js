import React, { Component } from 'react';
import { fetchStudents } from './api';
import Block from './FundamentalsBlock';

class BlockBreakdown extends Component {
    state = {
        students: [],
        fundamentals: [],
        backend: [],
        frontend: [],
        project: [],
        isLoading: true
    }

    componentDidMount() {
        fetchStudents(false).then((studentsData) => {
            const students = studentsData;
            const fundamentals = students.filter(student => student.currentBlock === "fun")
            const backend = students.filter(student => student.currentBlock === "be")
            const frontend= students.filter(student => student.currentBlock === "fe")
            const project = students.filter(student => student.currentBlock === "proj")
            this.setState({students, fundamentals, backend, frontend, project, isLoading: false})
        })
    }

    render() {
        const { students, isLoading } = this.state
        if (isLoading) { 
            return <p>Loading...</p>
        }
        return (
            <div className="outerBlock">
                <Block students={this.state.fundamentals}/>
                <Block students={this.state.backend}/>
                <Block students={this.state.frontend}/>
                <Block students={this.state.project}/>
            </div>
        );
    }
}

export default BlockBreakdown;