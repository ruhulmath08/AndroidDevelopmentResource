import * as constants from '../../constants';
import {push, go} from 'react-router-redux';
import {fork, put, call, takeEvery} from 'redux-saga/effects';



const fetchLogin = (data) => {
  const reqObj =  {
      method : 'POST',
      headers : { 'Content-Type':'application/x-www-form-urlencoded' ,'Access-Control-Allow-Origin':'*' },
      body: `userId=${data.userId}&password=${data.password}`

    }
  return fetch(constants.api.concat('/login'),reqObj)
  .then(function(response){
    //console.log('response ', response.json());
    return response.json()
  })
  .catch(function(err){
    console.error('Error -> FetchLogin -> ', err);
  })
}

function* watchLogin(action) {
  try{
    const data = {
      userId: action.payload.userId,
      password: action.payload.password
    }
    const response = yield call(fetchLogin, data);

    if(response.message == 'ok') {
      yield put({type: constants.LOGIN_SUCCESS , payload: response})
      yield put({type: constants.CLIENT_LIST , payload: response.clientList})
      yield put(push('/dashboard'))
      // yield put(go('dashboard'))
    } else {
      yield put({type: constants.LOGIN_FAILURE})
    }

  }catch(err) {
    //console.log('Error -> Login api call -> saga ->', err);
    yield put({type: constants.LOGIN_FAILURE})
  }
}

function* login() {
  yield takeEvery(constants.LOGIN, watchLogin);
}
function* watchLogout(action) {
  try {
    yield put({type: constants.LOGOUT_DATA})
    yield put(push('/login'));
  } catch (e) {
    console.error('Error in watchLogout Saga', e);
  }
}

function* logout() {
  yield takeEvery(constants.LOGOUT, watchLogout)

}

export default function* authSagas(){
  yield [
    fork(login),
    fork(logout)
  ]
}
