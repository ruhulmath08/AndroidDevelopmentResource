import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import { routerMiddleware } from 'react-router-redux'
import {hashHistory, browserHistory} from 'react-router';

import createLogger from 'redux-logger';

import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

import appReducers from '../../App/stores';
//require babel-polyfill into webpack confiure to use redux-saga
import root_saga from '../../App/stores/sagas';

//Import ServerReducers
import serverReducer from '../../App/stores/server';
import config from '../../config';

const enhancers = [];
const middlewares = [];

const sagaMiddleware = createSagaMiddleware()
// Add thunk (redux-thunk)

middlewares.push(sagaMiddleware);

//Set-up redux-storage
const wrappedReducer = storage.reducer(appReducers);
//Setup middleware with engine
const engine = createEngine('odduu-server');
const storageMiddleware = storage.createMiddleware(engine);
middlewares.push(storageMiddleware);

//create loader
const loadStore = storage.createLoader(engine);
console.log("Development -> ", process.env.NODE_ENV);
//Add logger middleware
const loggerMiddleware = createLogger({
  predicate: ()=> ( config.isDev )
})
middlewares.push(loggerMiddleware);




middlewares.push(routerMiddleware(hashHistory))
//Apply all middlewares to redux enhancer
enhancers.push(applyMiddleware(...middlewares));

export default function configureStore(initialState = {}, type, callback) {
  //compose store
  if(type === 'client') {
    // middlewares.push(routerMiddleware(browserHistory))
    // //Apply all middlewares to redux enhancer
    // enhancers.push(applyMiddleware(...middlewares));
    var store = compose(...enhancers)(createStore)(wrappedReducer , initialState)
  } else {

    // //Apply all middlewares to redux enhancer
    // enhancers.push(applyMiddleware(...middlewares));
    //replace wrappedReducer to serverReducer
    var store = compose(...enhancers)(createStore)(serverReducer , initialState)
  }


  // load store
 if (typeof callback !== 'undefined') {
   // if there is a callback waiting for the new state, call it
   loadStore(store)
     .then((newState) => callback(null, newState))
     .catch(() => callback('Failed to load previous state', null))
 } else {
   if(type === 'client'){
     loadStore(store)
   }
 }

 // run app sagas
  sagaMiddleware.run(root_saga)
  store.close = () => store.dispatch(END)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../../App/stores', () => {
      const nextRootReducer = require('../../App/stores/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store

}
