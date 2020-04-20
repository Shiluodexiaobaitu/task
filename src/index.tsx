import React from 'react';
import ReactDOM from 'react-dom';

import './util/reset.css'
import 'antd/dist/antd.css';


import { Provider } from 'react-redux'
import store from './store/store'

import App from './pages/index/index'
// import Home from './pages/home/hemo'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
