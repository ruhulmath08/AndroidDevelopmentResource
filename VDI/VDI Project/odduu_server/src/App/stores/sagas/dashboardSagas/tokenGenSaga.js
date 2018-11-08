import * as constants from '../../constants';
import {takeEvery, put, call} from 'redux-saga/effects';

function pushToken(values) {
  const reqObj = {
    method : 'POST',
    headers : {
      'Content-Type':'application/x-www-form-urlencoded' ,
      'Access-Control-Allow-Origin':'*' ,
      "Authorization": values.token
    },
    body: `orgName=${values.orgName}&contactName=${values.contactName}&contactCell=${values.contactCell}&
    contactEmail=${values.contactEmail}&licenseQty=${values.licenseQty}&expDate=${values.expDate}`
  }

  return fetch(constants.api.concat('/dashboard/tokenGenerate'),reqObj)
  .then(function(response) {
    return response.json()
  })
}

function* watchAction(action) {
  try{
    const response = yield call(pushToken, action.payload)
    if(response.message == 'ok') {
      yield put({type: constants.TOKEN_GENERATE_SUCCESS, payload: action.payload})
      yield put({type: constants.CLIENT_LIST, payload: response.clientList});
    } else {
      yield put({type: constants.TOKEN_GENERATE_FAILURE, payload: action.payload})
    }
  }catch(err){
    console.log('error in tokenGenSaga');
  }
}

export default function* tokenGenSaga() {
  yield takeEvery(constants.TOKEN_GENERATE, watchAction);
}
