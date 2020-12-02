import React, { Component } from 'react';
import FundamentalsBlock from '../components/FundamentalsBlock'
import BackendBlock from '../components/BackendBlock'
import FrontendBlock from '../components/FrontendBlock'
import ProjectBlock from '../components/ProjectBlock'

class BlockBreakdown extends Component {
    state = {
        students: [],
        // isLoading: true,
    }
    render() {
        const { students, isLoading } = this.state
        // if (isLoading) { 
        //     return <p>Loading...</p>
        // }
        return (
            <div>
                <FundamentalsBlock/>
                <BackendBlock/>
                <FrontendBlock/>
                <ProjectBlock/>
            </div>
        );
    }
}

export default BlockBreakdown;