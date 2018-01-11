import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error404 from './pages/404';
import Home from './pages/Home';
import Estimates from './pages/Estimates';
import registerServiceWorker from './sw';
import './assets/styles/main.scss';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/orcamento" component={Estimates} />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
