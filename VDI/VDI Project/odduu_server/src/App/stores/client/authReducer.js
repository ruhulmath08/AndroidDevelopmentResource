import * as constants from '../constants';
import * as authServices from './authServices';

export default function (state = constants.INITIAL_STATE, action) {
  switch (action.type) {
    case constants.LOGIN_SUCCESS:
      return authServices.setUserData(state, action.payload);
      break;
    case constants.LOGIN_FAILURE:
        return authServices.loginFailure(state);
        break;
    case constants.LOGOUT_DATA:
        return authServices.logout(state);
        break;
    default:
      return state;
  }
}
