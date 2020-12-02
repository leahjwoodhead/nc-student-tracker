import React, { Component } from 'react';
import Grid from '../components/Grid'

class Students extends Component {
    state = {
        students: [],
        // isLoading: true,
    }

    // componentDidMount() 


    render() {
        const {students, isLoading} = this.state;
        // if (isLoading) { 
        //     return <p>Loading...</p>
        // }
        return (
            <div>
                <Grid/>
            </div>
        );
    }
}

export default Students;