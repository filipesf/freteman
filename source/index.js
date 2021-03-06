import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ServiceWorker from './sw';
import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Fleet from './containers/Fleet';
import Services from './containers/Services';
import Contact from './containers/Contact';
import Faq from './containers/Faq';
import Error404 from './containers/404';
import './assets/styles/main.scss';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/frota" component={Fleet} />
      <Route path="/servicos" component={Services} />
      <Route path="/contato" component={Contact} />
      <Route path="/orcamento" component={App} />
      <Route path="/faq" component={Faq} />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
ServiceWorker();
