import React, { Component } from 'react';
import Grid from './Grid';
import {fetchStudents} from './api';
import { css } from "@emotion/core";
import ClockLoader from "react-spinners/ClockLoader"

const override = css`
  display: block;
  margin: 100px auto;
  border-color: red;
`;

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
      return  <ClockLoader
      css={override}
      size={150}
      color={"#123abc"}
      loading={this.state.loading}
    />
    }
    return (
      <div>
        <Grid students={graduates} />
      </div>
    );
  }
}

export default Graduates;
