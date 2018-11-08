import * as constants from '../../constants';
import {takeEvery, put, call} from 'redux-saga/effects';

function removeClient(payload) {
  const reqObj = {
    method : 'POST',
    headers : {
      'Content-Type':'application/x-www-form-urlencoded' ,
      'Access-Control-Allow-Origin':'*' ,
      "Authorization": payload.token
    },
    body: `id=${payload.id}`
  }
  return fetch(constants.api.concat('/dashboard/removeClient'), reqObj)
  .then(function(response) {
    return response.json();
  })
}

function* hitAction(action) {
  try{
    console.log('removeClient saga', action);
    var response = yield call(removeClient,action.payload);
    if (response.message == 'ok') {
      yield put({type:constants.REMOVE_CLIENT_SUCCESS, payload: response.removed});
      yield put({type: constants.CLIENT_LIST, payload: response.clientList});
      console.log(action);
    }else {
      yield put({type:constants.REMOVE_CLIENT_FAILURE, payload: action.payload.id})
    }
  }catch(err) {
    console.error('Error in removeClientSaga file');
  }
}

export default function* removeClientSaga() {
  yield takeEvery(constants.REMOVE_CLIENT, hitAction);
}
