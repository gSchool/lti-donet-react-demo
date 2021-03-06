import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import createStore from './state/store'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const cs = createStore()

ReactDOM.render(
  <Provider store={cs}>
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  </Provider>,
  rootElement);

registerServiceWorker();

