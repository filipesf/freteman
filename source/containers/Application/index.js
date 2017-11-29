import React, { Component } from 'react';
import './assets/app.scss';

import LandingPage from '../LandingPage';

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
