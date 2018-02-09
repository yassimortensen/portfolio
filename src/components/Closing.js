import React, { Component } from 'react';
import '../App.css';

class Closing extends Component {
  render() {
    return (
      <div className="closing">
        <p className="work-together">Want to work together?</p>
        <p className="accepting">{`I'm currently accepting new projects and would love to hear about yours.`}</p>
        <p className="accepting tell-me">Please take a few minutes to tell me about it</p>
      </div>
    );
  }
}

export default Closing;
