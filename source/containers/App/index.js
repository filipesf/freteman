import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Console from './Console';
import Sidebar from './Sidebar';
import Estimate from '../Estimate';
import Headline from '../../components/Headline';
import './assets/app.scss';

class App extends React.Component {
  render() {
    return (
      <section className="application">
        <Sidebar />
        <section className="l-dashboard">
          <Console />

          <BrowserRouter>
            <section className="l-workspace">
              <Headline left title="Solicite uma coleta e entrega" />
              <Route exact path="/orcamento" component={Estimate} />
            </section>
          </BrowserRouter>

        </section>
      </section>
    );
  }
}

export default App;
