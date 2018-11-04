import React, { Component } from 'react';
import { withRouter } from 'next/router';

class About extends Component {
  render() {
    return (
      <h1>This is the about page.</h1>
    );
  }
}

export default withRouter(About);
