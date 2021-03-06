import React from 'react';
import ReactDOM from 'react-dom';
import IntlProvider from 'react-intl';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <IntlProvider>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
