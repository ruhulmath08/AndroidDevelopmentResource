import { syncHistoryWithStore,push } from 'react-router-redux';
import { Router, hashHistory ,Link,browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';

import root from './utils/windowOrGlobal';

import routes from './routes';
import configureStore from '../config/store';
import config from '../config';

//Add css & js from react-mdl
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import "regenerator-runtime/runtime";
//Browser initialState from localstorage
// let preloadedState = JSON.parse(root.initialState);
if(config.isDev) {
  //console.log('Root -> ',root.localStorage); //debug
}


// Setup store
const store = configureStore({}, 'client')

//Setup routing
export const history=syncHistoryWithStore(hashHistory, store);



render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)

export const auth = () => {
  //console.log('Auth props -> ', props);
}


store.dispatch(push('login'))
