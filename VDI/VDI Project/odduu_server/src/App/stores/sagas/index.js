import {fork} from 'redux-saga/effects';
import authSagas from './authSagas';
import dashboardSagas from './dashboardSagas';
export default function* root_saga(){
  yield [
    fork(authSagas),
    fork(dashboardSagas)
  ]
}
