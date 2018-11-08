import {receiver} from '../init';
import * as _path from '../path';
import mori from 'mori';
/**
 * @function loadAllApps
 * @description Retrive all the app names from redis.
 */
export default function loadAllApps(){
  let keys =[_path.VM_WIN_APPS,_path.VM_LINUX_APPS];
  return (
    Promise.all(keys.map((key,index)=>{
      return new Promise((resolve,reject)=>{
        receiver.smembers(key,function(err,result){
          if(err) {return err;}
          var a=result.map((item,index)=>{
            return item;
          })
          var objKey=key.split('.')[3]
          resolve({ [objKey]: a})
        })
      })
    }))
  )
}
