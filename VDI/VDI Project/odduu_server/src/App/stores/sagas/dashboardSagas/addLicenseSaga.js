import * as constants from '../../constants';
import {takeEvery, put, call} from 'redux-saga/effects';

function pushLicense(data) {
  const reqObj = {
    method : 'POST',
    headers : {
      'Content-Type':'application/x-www-form-urlencoded' ,
      'Access-Control-Allow-Origin':'*' ,
      "Authorization": data.token
    },
    body: `id=${data.id}&expDate=${data.expDate}&qty=${data.licenseQty}`
  }
  return fetch(constants.api.concat('/dashboard/addLicense'),reqObj)
  .then(function(response) {
    return response.json()
  })
}

function* watchAction(action) {
  try{
    const response = yield call(pushLicense,action.payload);
    if(response.message == 'ok') {
      yield put({type: constants.ADD_LICENSE_SUCCESS, payload: action.payload});
      yield put({type: constants.CLIENT_LIST, payload: response.clientList});
      alert('License Add Success')
    }
  } catch(err) {
      yield put({type: constants.ADD_LICENSE_FAILURE, payload: action.payload})
      alert('License Add Failure')
  }
}

export default function* addLicenseSaga() {
  yield takeEvery(constants.ADD_LICENSE, watchAction);
}
