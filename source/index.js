import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './pages/LandingPage';
import './assets/styles/main.scss';
import registerServiceWorker from './sw';

ReactDOM.render(<LandingPage />, document.getElementById('root'));
registerServiceWorker();
