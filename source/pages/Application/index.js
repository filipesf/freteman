import React, { Component } from 'react';
import './assets/app.scss';

class App extends Component {
  render() {
    return (
      <div id="FretemanApp">
        {this.props.children}
      </div>
    );
  }
}

export default App;
