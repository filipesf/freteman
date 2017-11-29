import React, { Component } from 'react';
import './App.scss';

import LandingPage from '../LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <div id="FretemanApp">
        <LandingPage />
      </div>
    );
  }
}

export default App;
