import {receiver} from '../init';
import * as _path from '../path';
export default function loadAllMacIps(){
  let keys=[_path.VM_WIN_MAC_IPS,_path.CLIENT_MAC_IPS];
  return Promise.all(keys.map(key=>{
              return new Promise((resolve,reject)=>{
                receiver.smembers(key,function(err,result){
                  if (err){
                    return err;
                  }
                  var newKey=key.split('.')[1];
                  resolve({newKey:result});
                })
              })
        }))
}
