var encrypter = require('object-encrypter');
var engine = encrypter(['ODDUU', 'RAKIN','AFSER','2017']);
/**
 * @function encrypterFun
 * @param {Object} obj 
 * @description Encrypting an object with sha256 hash and custom secret key.
 */
export const encrypterFun = (obj)=> {
  return engine.encrypt(obj);
}

/**
 * @function decrypterFun
 * @param {string} hax
 * @description Decrypting a hax code to an Object. 
 */
export const decrypterFun =(hax)=> {
  try {
    return engine.decrypt(hax);
  } catch (e) {
    console.error('Error in parsing hax -> ParserHax File -> ',e);
    return false;
  }

}
