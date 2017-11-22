import React, { Component } from 'react';
import './App.scss';

import Sidebar from '../Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div id="FretemanApp">
        <Sidebar />
      </div>
    );
  }
}

export default App;
