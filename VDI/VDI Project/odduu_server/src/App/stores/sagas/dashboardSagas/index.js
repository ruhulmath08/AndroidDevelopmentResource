import {fork} from 'redux-saga/effects';
import tokenGenSaga from './tokenGenSaga';
import removeClientSaga from './removeClientSaga';
import addLicenseSaga from './addLicenseSaga';
export default function* dashboardSagas() {
  yield[
    fork(tokenGenSaga),
    fork(removeClientSaga),
    fork(addLicenseSaga)
  ]
}
