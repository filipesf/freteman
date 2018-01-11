import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Estimates from './Estimates';
import './assets/app.scss';

class App extends React.Component {
  render() {
    return (
      <section className="application">
        <Sidebar />
        <section className="app-container">
          <BrowserRouter>
            <Route exact path="/orcamento" component={Estimates} />
          </BrowserRouter>
        </section>
      </section>
    );
  }
}

export default App;
