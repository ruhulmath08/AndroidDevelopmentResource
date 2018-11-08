/**
 * @author Rakin Afser <r.afser01@gmail.com>
 * @fileoverview License 
 */
import {getMembers, removeMember, getRedis, setRedis} from '../init';
import {CLIENT_HOST_NAMES, LICENSE_QTY, DB_LICENSE_LIST} from '../path';
import {get} from 'mori';
import {store} from '../index';
import {removeClient} from '../redux/actions';

export const countLicense = (licenseList) => {
  var qty =0;
  licenseList.forEach(function(item, index) {
    qty+= new Date(item.expDate).getTime() >= global.time ? item.qty : 0;
  })
  return qty;
}
/**
 * @method hostnameVSlicenseQty
 * @param {number} licenseQty 
 * @description - Read license quantity from Redis and compare it with given quantity.
 */
export const hostnameVSlicenseQty = (licenseQty)=> {
  return new Promise(function(resolve, reject) {
    getMembers(CLIENT_HOST_NAMES).then(function(hostList) {
      var result={};
      if(licenseQty >= hostList.length) {
        result['result'] = true;
      } else {
        var exceed  = hostList.length - licenseQty;
        var exceedHost = hostList.splice(hostList.length - exceed, exceed);
        removeMember(CLIENT_HOST_NAMES, exceedHost);
        result['result'] = false;
        result['exceed'] = exceed;
        result['exceedHost'] = exceedHost;
      }
      resolve(result)
    })
  })
}

export const loadLicenseQty = ()=> {
  return new Promise(function(resolve, reject){
    getRedis(LICENSE_QTY).then(function(qty) {
      resolve(qty);
    })
  })
}

export function licenseListVSexpire() {
  return new Promise(function(resolve, reject) {
    getRedis(DB_LICENSE_LIST).then(function(result) {
      if(result != undefined) {
        var parsedResult = JSON.parse(result);
        var validLicenseQty = countLicense(parsedResult.licenseQty);
        setRedis(LICENSE_QTY, validLicenseQty);
        hostnameVSlicenseQty(validLicenseQty).then(function(response) {

          var entries = get(store.getState(), 'entries')

          if(response.exceedHost != undefined && response.exceedHost.length > 0) {
            // uiSocket.emit('CLIENT_REMOVED', JSON.stringify(response));
            response.exceedHost.forEach(function(host, index) {
              var lab = host.split(/[-cl | pc]+/)[1];
              var pc = host.split(/[-cl | pc]+/)[2];
              var removedClient= toJs(entries).filter(function(item, index) {
                var newLab = Object.values(item)[0]['lab']
                var newPC = Object.values(item)[0]['pc']
                return lab == newLab && pc == newPC
              })
              var mac = Object.keys(removedClient[0])[0]
              store.dispatch(removeClient({mac:mac}))
              resolve(response)
            })
          } else {
            resolve({result: true})
          }
          //store.dispatch() remove clients from store
        })
      }
    })
  })
}
