import * as constants from '../constants';
import * as tokenServices from './tokenServices';
import {logout} from './authServices';
export default function(state = constants.INITIAL_STATE, action) {
  switch (action.type) {
    case constants.CLIENT_LIST:
      return tokenServices.addClientList(state, action.payload);
      break;
    case constants.TOKEN_GENERATE_SUCCESS:
        return tokenServices.tokenGenSuccess(state, action.payload);
        break;
    case constants.TOKEN_GENERATE_FAILURE:
        return tokenServices.tokenGenFailure(state, action.payload);
        break;
    case constants.REMOVE_CLIENT_SUCCESS:
        return tokenServices.removeClientSuccess(state, action.payload);
        break;
    case constants.REMOVE_CLIENT_FAILURE:
        return tokenServices.removeClientFailure(state, action.payload);
        break;
    case constants.LOGOUT_DATA:
        return logout(state);
        break;
    default:
      return state

  }
}
