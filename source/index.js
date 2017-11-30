import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/LandingPage';
import './assets/styles/main.scss';
import registerServiceWorker from './sw';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
