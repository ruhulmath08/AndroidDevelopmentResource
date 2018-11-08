import {spawn} from 'child_process';
import {receiver} from '../init';
export  function loadAppListFromDir(obj){
  var sp=spawn(obj.cmd,obj.args,obj.options);
  sp.stdout.on('data',(data)=>{
    console.log('success data ',data.toString('utf8').split('\n'))
    data.toString('utf8').split('\n').forEach(function(single,index){
      if(single.trim().length > 0 ){
        receiver.sadd(obj.key,single)
      }
    })


  })
  sp.stderr.on('data',(data)=>{

   console.log('Error from spawn : ',data)
  })
  sp.on('close',(code)=>{

   console.log('Clossing spawn execution ',obj.args)
 })
}
