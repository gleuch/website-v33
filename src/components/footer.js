import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>Copyright 2003&ndash;{year} Greg Leuch, unless noted differently.</p>
      </footer>
    )
  }
}

export default Footer;
