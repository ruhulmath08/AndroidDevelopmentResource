import {SECRET_KEY_SOCKET} from '../../App/stores/constants';
var encrypter = require('object-encrypter');

const engine = encrypter(SECRET_KEY_SOCKET);
/**
 * @function encrypterFun - Encrypting the object to hex with a secret key. - sha256
 * @param {Object} obj 
 */
export const encrypterFun = (obj) => {
  return engine.encrypt(obj);
}
/**
 * @function decrypt - Decryption a hex code to a object by a scret key.
 * @param {String} hex 
 */
export const decrypterFun = (hex) => {
  try {
    return engine.decrypt(hex);
  } catch (e) {
    console.error('Error in parsing hax -> encrypter File -> ',e);
    return false;
  }
}
