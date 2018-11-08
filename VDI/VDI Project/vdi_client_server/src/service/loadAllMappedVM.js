import {receiver} from '../init';
import * as _path from '../path';
var bluebird=require('bluebird');
import mori from 'mori';
export default function loadAllMappedVM() {
  return Promise.resolve({
    then:function(onFullfill,onReject){
      getAllClientsHostnames().then(function(hostNames){
        getMacFromHostname(hostNames).then(function(hostMacObj){
          getWinLinuxbyMac(hostMacObj).then(function(vmMapps){
            onFullfill(vmMapps)
          })
        })
      })
    }
  })
}

function getAllClientsHostnames(){
  return Promise.resolve({
    then:function(onFullfill,onReject){
      receiver.smembers(_path.CLIENT_HOST_NAMES,function(err,result){
        if(err){
          return
        }
        onFullfill(result)
      })
    }
  })
}
function getMacFromHostname(hostNames) {

  return Promise.all(hostNames.map(function(hostName){
    return Promise.resolve({
      then:function(onFullfill,onReject){
        receiver.get(_path.hostnameToMac(hostName),function(err,result){
          onFullfill({hostName:hostName, mac:result})
        })
      }
    })
  }))

}
function getWinLinuxbyMac(arrs){
  return Promise.all(arrs.map(function(item){
    return Promise.all([_path.vmMappingWin(item.mac),_path.vmMappingLinux(item.mac)].map(function(vmPath){
        return Promise.resolve({
          then:function(resolve,reject){
            receiver.get(vmPath,function(err,result){
              if(err){
                return
              }
              resolve(mori.hashMap(`${item.hostName}.${vmPath.split('.')[2]}`,result))
            })
          }
        })
      })).then(function(singleResult){
        return new Promise(function(resolve,reject){
          return resolve(singleResult)
        })
      })
  }))
}
