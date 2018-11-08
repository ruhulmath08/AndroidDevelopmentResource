import {receiver} from '../init';
import * as _path from '../path';
import mori from 'mori';
/**
 * @function loadAllMacIps
 * @description - All clients Mac Ips refer how many clients are exist. And retrive a client infromation by Client Mac IP.
 */
export default function loadAllMacIps(){
  let keys=[_path.VM_WIN_MAC_IPS];
  return clientMacList().then(function(hostNames){
    return Promise.all(hostNames.map(function(hostName){
      return new Promise(function(resolve,reject){
        receiver.get(_path.hostnameToMac(hostName),function(err,result){
          if(err){
            return
          }
          resolve(result)
        })
      })
    })).then(function(client){
          return new Promise((resolve,reject)=>{
            receiver.smembers(_path.VM_WIN_MAC_IPS,function(err,result){
              if (err){
                return err;
              }

              resolve([mori.hashMap('VM_WIN',result),mori.hashMap('CLIENT',client)]);
            })
          })
    })
  });


}

function clientMacList(){
  return Promise.resolve({
    then:function(onFulfil,onReject){
      console.log(_path.CLIENT_HOST_NAMES);
      receiver.smembers(_path.CLIENT_HOST_NAMES,function(err,hostNames){
        if (err){
          return
        }
        onFulfil(hostNames)
      })
    }
  })
}
