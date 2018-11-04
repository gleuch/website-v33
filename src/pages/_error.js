import React, { Component } from 'react';
import { withRouter } from 'next/router';

class Error extends Component {
  static getInitialProps({ res, err }) {
    const { statusCode } = res || err;

    return { statusCode };
  }

  render() {
    return (
      <h1>This is the error page.</h1>
    );
  }
}

export default Error;
