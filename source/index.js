import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import registerServiceWorker from './sw';

import LandingPage from './pages/LandingPage';

ReactDOM.render(<LandingPage />, document.getElementById('root'));
registerServiceWorker();
