import * as constants from '../../../../../App/stores/constants';
export function remoteClient(id, token) {
  return {
    type: constants.REMOVE_CLIENT,
    payload: {
      id: id,
      token: token
    }
  }
}
export function addLicenseAction(values) {
  return {
    type: constants.ADD_LICENSE,
    payload: values
  }
}
