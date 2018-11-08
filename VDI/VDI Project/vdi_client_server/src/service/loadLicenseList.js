import {getRedis} from '../init';
import {DB_LICENSE_LIST} from '../path';

export function loadLicenseList() {
  return new Promise(function(resolve, reject) {
    getRedis(DB_LICENSE_LIST).then(function(res) {
      if(res != undefined) {
        resolve(JSON.parse(res));
      }
      reject('License List not found');
    })
  })
}
