import * as constants from '../../../App/stores/constants';
export function clientList(clientList) {
  return {
    type: constants.CLIENT_LIST,
    payload: clientList
  }
}
export function tokenGenSuccess(newCLient) {
  return {
    type: constants.TOKEN_GENERATE_SUCCESS,
    payload: newCLient
  }
}
export function tokenGenFailure(oldClient) {
  return {
    type: constants.TOKEN_GENERATE_FAILURE,
    payload: oldClient
  }
}
