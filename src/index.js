import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { appConnector } from './connector';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

window.store = store;

const MyApp = appConnector(App);

ReactDOM.render(
  <Provider store={ store }>
    <MyApp />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
