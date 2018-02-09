import React, { Component } from 'react';
import './App.css';

import Intro from './components/Intro'
import Languages from './components/Languages'
import PersonalProjects from './components/PersonalProjects'
import Closing from './components/Closing'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Languages />
        <PersonalProjects />
        <Closing />
        <Footer />
      </div>
    );
  }
}

export default App;
