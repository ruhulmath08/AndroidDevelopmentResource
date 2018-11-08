import {receiver} from '../init';
import * as _path from '../path';
import mori from 'mori';
import loadAllMacIps from './loadAllMacIps'
/**
 * @function loadAllMachineData
 * @description On initial time, program retrives all client information like Mac IP, IP address, lab number etc etc from database (redis)
 */
export default function loadAllMachineData(){
  return (
    loadAllMacIps().then(result=>{
      console.log('load all macips  --- ',result);
      return Promise.resolve({then:function(onFulfil,onReject){
        onFulfil(result.reduce(function(obj,single,index){
          return mori.into(obj,single);
        },mori.hashMap()))
      }}).then(obj=>{
        let vm_win=mori.get(obj,'VM_WIN');
        let client=mori.get(obj,'CLIENT');
        return (
          Promise.all(mori.toJs([vm_win,client].reduce(function(arr,item){
            return mori.into(arr,mori.toClj(mori.toJs(item).map(mac=>{
              return mac;
            })
          ))
        },mori.vector())).map(mac_key=>{
          return new Promise((resolve,reject)=>{
            receiver.get(_path.MACHINE_DATA.concat(mac_key),function(err,result){
              resolve(mori.hashMap(mac_key,JSON.parse(result)));
            })
          })
        }))
        )
      })
    })
  )
}
