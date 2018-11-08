import {receiver} from '../init';
import * as _path from '../path';
export default function loadUserList() {
  return Promise.resolve({

    then:function(onFullfill,onFailure){
      receiver.keys(_path.key.concat('USER*'),function(err,result){
        if(err){
          return
        }
        onFullfill(result)
      })
    }
  }).then(function(result){
    return Promise.all(result.map(function(key,index){
      return new Promise(function(resolve,reject){

        receiver.get(key,function(err,res){
          if(err){
            return
          }


          resolve(JSON.parse(res))
        })
      })
    }))
  })
}
