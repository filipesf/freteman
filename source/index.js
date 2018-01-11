import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import registerServiceWorker from './sw';
import './assets/styles/main.scss';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
