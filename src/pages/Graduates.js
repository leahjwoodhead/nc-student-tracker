import React, { Component } from 'react';
import Grid from '../components/Grid';
import fetchStudents from '../components/api';

class Graduates extends Component {
  state = {
    graduates: [],
    isLoading: true,
  };
  componentDidMount() {
    fetchStudents(true).then((graduates) => {
      this.setState({ graduates, isLoading: false });
    });
  }
  render() {
    const { graduates, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <Grid students={graduates} />
      </div>
    );
  }
}

export default Graduates;
