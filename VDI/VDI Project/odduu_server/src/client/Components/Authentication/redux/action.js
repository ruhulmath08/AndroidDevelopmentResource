import * as constants from '../../../../App/stores/constants';

export function login (userId, password) {
  
  return {
    type: constants.LOGIN,
    payload: {userId: userId, password: password}
  }
}
