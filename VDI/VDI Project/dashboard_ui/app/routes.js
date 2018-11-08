import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import dashboard from './containers/dashboard';
import authentication from './containers/authentication';
import odduuCon from './containers/dashboard/render/main_body/odduuCon';
import userCreateCon from './containers/dashboard/render/main_body/userCreateCon';
import vm_winCon from './containers/dashboard/render/main_body/vm_winCon';
import vm_linuxCon from './containers/dashboard/render/main_body/vm_linuxCon';
import vm_mapping from './containers/dashboard/render/main_body/vm_mappingCon';
import helpCon from './containers/helpCon';
import licenseCon from './containers/dashboard/render/main_body/licenseCon';
import AddWinAppCom from './containers/dashboard/render/main_body/addWinAppCon';
import {auth} from './index';
/**
 * @constructor Route
 * @description All routes are configured here to navigate the component. 
 */
export default (
  <Route path="/" name="Home" component={App}>


      <Route path='login' component={authentication} ></Route>
      <Route path='help' component={helpCon} ></Route>
      <Route path='dashboard' component={dashboard} onEnter={auth}  >
        <IndexRoute component={odduuCon} ></IndexRoute>
        <Route path='odduu' component={odduuCon} ></Route>
        <Route path='vm_win' component={vm_winCon} ></Route>
        <Route path='vm_linux' component={vm_linuxCon} ></Route>
        <Route path='user_create' component={userCreateCon} ></Route>
        <Route path='vm_mapping' component={vm_mapping} ></Route>
        <Route path='license' component={licenseCon} ></Route>
        <Route path='addWinApp' component={AddWinAppCom} ></Route>
      </Route>

    </Route>


);


// <IndexRoute component={dashboard}/>
// <Route path="/dashboard" name="dashboard" component={dashboard}>
//   <IndexRoute component={odduuCon} ></IndexRoute>
//   <Route path="/dashboard/odduu" component={odduuCon} name="odduu" ></Route>
//   <Route path="/dashboard/vm_win" component={vm_winCon} name="vm_win" ></Route>
// </Route>
// <Route component={ensureLoggedIn}>
//
// //here restricted elements exist
//   </Route>
