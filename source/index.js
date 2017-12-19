import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './sw';
import './assets/styles/main.scss';

import LandingPage from './pages/LandingPage';

ReactDOM.render(<LandingPage />, document.getElementById('root'));
registerServiceWorker();
