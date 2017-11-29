import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/Application';
import registerServiceWorker from './sw';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
