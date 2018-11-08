import * as path from '../path'
import { createStore, applyMiddleware } from 'redux';
import {initialStore} from '../actions/core'
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import remoteActionMiddleware from './remote_action_middleware';
const router = routerMiddleware(hashHistory);

/**
 * @function configureStore
 * @param {Object} initialState - Save initial data on redux store 
 * @param {any} socket - A soccet connection object 
 * @returns reduxStore
 */
export default function configureStore(initialState=initialStore,socket) {
	
	const enhancer = applyMiddleware(thunk, router, remoteActionMiddleware(socket));
	//return createStore(rootReducer, initialState, enhancer);
  return createStore(rootReducer, enhancer); // eslint-disable-line
}
