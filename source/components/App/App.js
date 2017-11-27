import React, { Component } from 'react';
import './App.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div id="FretemanApp">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
