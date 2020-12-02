import React, { Component } from 'react';
import Grid from '../components/Grid'

class Graduates extends Component {
    state = {
        graduates: [],
        // isLoading: true
    }
    render() {
        const { graduates, isLoading } = this.state
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

export default Graduates;