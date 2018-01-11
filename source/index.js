import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ServiceWorker from './sw';
import App from './containers/App';
import Home from './containers/Home';
import Error404 from './containers/404';
import './assets/styles/main.scss';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/orcamento" component={App} />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
ServiceWorker();
