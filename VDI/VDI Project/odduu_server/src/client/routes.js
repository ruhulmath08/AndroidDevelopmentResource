import React from 'react';
import { Route, IndexRoute } from 'react-router';

const auth = require('./index').auth;
export {history} from './index';
import App from './Components/App';
const Dashboard = require('./Components/Dashboard').default;
const License = require('./Components/Dashboard/Scenes/License/License').default;
import TokenGen from './Components/Dashboard/Scenes/TokenGen';
import Login from './Components/Authentication';

export default (
  <Route path="/" name="Home" component={App}>


    <Route path="login" name="Login" component={Login}  ></Route>
    <Route path="dashboard" name="Dashboard" component={Dashboard}  > //onEnter={auth} -> auth check and dispatch to route
      <IndexRoute component={License} />
      <Route path="tokenGen" name="TokenGen" component={TokenGen}  ></Route>
      <Route path="license" name="license" component={License}  ></Route>
    </Route>
  </Route>
)
