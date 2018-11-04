import React, { Component } from 'react';
import { withRouter } from 'next/router';

import Footer from '../components/footer';

class Home extends Component {
  render() {
    return (
      <div className="page--home">
        <h1>gleu.ch</h1>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Home);
