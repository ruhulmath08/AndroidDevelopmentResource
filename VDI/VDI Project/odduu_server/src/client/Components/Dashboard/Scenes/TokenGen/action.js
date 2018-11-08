import * as constants from '../../../../../App/stores/constants';

export function generateToken(values) {
  return {
    type: constants.TOKEN_GENERATE,
    payload: values
  }
}
