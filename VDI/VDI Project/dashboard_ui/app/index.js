/**
 * @author Rakin Afser <r.afser01@gmail.com>
 * @fileoverview Dashboard Ui Entry Point
 */

import configureStore from './store/configureStore'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory ,Link,browserHistory} from 'react-router';
import { syncHistoryWithStore,push } from 'react-router-redux';
import io from 'socket.io-client'
import routes from './routes'
import {goBackRoute,winAppAddToList,setUserList,setVmMapping,setState,setAppList,setAuthentication,createUserResult} from './actions/actions'

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import mori from 'mori'
import * as path from './path';
import {createHistory} from 'history';
import {WIN_FILE_TRANSFER_RESULT,SUBMIT_TOKEN_REPLY, CLIENT_REMOVED, WIN_APP_ADD_RESULT} from './constants';

let socket=io(path.server);
/**
 * @event WIN_APP_ADD_RESULT
 * @description Listen an event from vdi_client_server project as a reply of WIN_APP_ADD event.
 */
socket.on(WIN_FILE_TRANSFER_RESULT, (resultObj)=> {
  resultObj.forEach((item, index)=> {
    if (item.result) {
      alert("File transfered successfully "+item.fileName)
    }else {
      alert("Failed to transfer  "+item.fileName)
    }
  })
})
/**
 * @event WIN_APP_ADD_RESULT
 * @description After installation of windows app, Server will send the status to Dashboard UI
 */
socket.on(WIN_APP_ADD_RESULT, (resultObj)=> {
  if(resultObj.result == true) {
    store.dispatch(winAppAddToList(resultObj.appName))
    alert(`${resultObj.appName} App added.`)
    store.dispatch(goBackRoute);
  }
})
/**
 * @event initialData
 * @description After authenticate, server will send initial data / Home screen data.
 */
socket.on('initialData',(initialData)=>{

  if(initialData.entries!=undefined){
    store.dispatch(setState(initialData.entries))
    // console.log(' ---- initialData --- ',initialData)
  }
  if(initialData.vm_mapping!=undefined){
    store.dispatch(setVmMapping(initialData.vm_mapping))
    // console.log(' ---- initialData --- ',initialData)
  }

  if(initialData.appList != undefined){
    store.dispatch(setAppList(initialData.appList));

  }
  if(initialData.userList != undefined){
    store.dispatch(setUserList(initialData.userList))
  }
  if(initialData.licenseList != undefined) {
    store.dispatch({
      type: path.LICENSE_INFO_ACTION,
      payload: initialData.licenseList
    })
  }
  });
  /**
   * @event SUBMIT_TOKEN_REPLY
   * @description Check token validity with server and receive the response
   */
  socket.on(SUBMIT_TOKEN_REPLY, function(obj) {
    if(obj.result == true) {
      alert('Token is verified')
    }else {
      alert('Token is not verified!')
    }
  })
  /**
   * @event CLIENT_REMOVED
   * @description ODDUU Client remove response
   */
  socket.on(CLIENT_REMOVED, function(obj) {
    var parsedObj = JSON.parse(obj);
    alert('Removed Client Due to Expire License :  \nQuantity -> '+parsedObj.exceed+'\nClient ->'+parsedObj.exceedHost)
  })
socket.on('disconnect',()=>{
  console.log('disconnected client')
})
socket.on('error',() =>{
  console.log('error ------------------ ')
})
/**
 * @event authenticationResult
 * @description Server reply to Dashboard UI for Authenticaton
 */
socket.on('authenticationResult',function(obj){
  var parsedObj=obj;

  if(parsedObj.isLoggedIn===false){
    store.dispatch(setAuthentication(parsedObj))
  }else{

    store.dispatch(setAuthentication(parsedObj));

    pathChange(history,'dashboard')

  }
})
/**
 * @event create_user_account_result 
 * @description Server reply with User account create result.
 */
socket.on('create_user_account_result',function(result ){
  if(result.result === true){
    console.log('in create user result ',result)
    store.dispatch(createUserResult(result))
  }else{
    //user exist
    store.dispatch(createUserResult(result))
    console.log('in create user result ',result)
  }
})
/**
 * @function auth
 * @description auth function will invoke each time the navigation changed between dashboard.
 */
export function auth(){

  if(mori.toJs(store.getState().reducers).isLoggedIn === true){


  }else{

    pathChange(history,'login')
  }
}
const store=configureStore(undefined,socket);
const history=syncHistoryWithStore(hashHistory,store);

//Debugg--
store.subscribe(()=>{
  //console.log('Debugging : Store -- ',store.getState())
})

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

/**
 * 
 * @param {Object} history 
 * @param {String} pathName 
 */
function pathChange(history,pathName) {
  history.push(pathName)
}

exports.history = history;

/*const socket = io.connect('http://192.168.223.34:8090/', { query: "macId=02:42:a9:07:5e:32" });
socket.on('state', state =>{
  console.log('vector  state', state.entries)
  if(state.entries!=undefined){
    store.dispatch(setState(state.entries))
    socket.close()
  }
})
socket.on('disconnect',()=>{
  console.log('disconnected client')
})
socket.on('error',() =>{
      console.log('error ------------------ ')
})*/
