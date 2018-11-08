import {get, assoc} from 'mori';
import * as constants from '../constants';
// const changeRoute = require('../../../client').changeRoute;

export const setUserData = (state, payload) => {
  return assoc(state, 'user', payload.user, 'token', 'JWT '.concat(payload.token))
}
export const loginFailure = (state) => {
  return constants.INITIAL_STATE;
}
export const logout = (state) => {
  return constants.INITIAL_STATE;
}
