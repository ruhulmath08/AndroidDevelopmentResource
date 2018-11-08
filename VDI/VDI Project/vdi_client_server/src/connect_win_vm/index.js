import {publisher,subscriber,receiver} from '../init';
import * as _path from '../path';
import mori from 'mori';
import {pingClient} from '../process/net_ping'
import {spawn} from 'child_process';
import {exec} from 'child_process';
var downVmWins=''
var startedVm=mori.set()
export default function(store){
  console.log('in connec vm ');
  setInterval(function(){
    downVmWins=mori.hashMap()
    mori.toJs(mori.get(store.getState(),'entries')).forEach(function(single,index){
      if(Object.values(single)[0]['system']==='win32' && Object.values(single)[0]['active']=== false){
        publisher.publish(Object.keys(single)[0].concat(_path.checkUser),JSON.stringify(single))
        console.log('key -- ',Object.keys(single)[0].concat(_path.checkUser));
        downVmWins=mori.assoc(downVmWins,Object.values(single)[0]['ip'],{mac:Object.keys(single)[0], mainObj:Object.values(single)[0]})
      }
      Object.keys(mori.toJs(downVmWins)).forEach(function(single,index){
        pingClient(single)
      })
    })
  },50000)
}
subscriber.subscribe(_path.ping_down_vm_win)
subscriber.on('message',function(chanel, msg){
  if(chanel === _path.ping_down_vm_win){
    var parsedMsg=JSON.parse(msg)
    startedVm=mori.conj(startedVm,parsedMsg.ip)
  }

})
function sendConnection(){
  setInterval(function(){
    var arr=mori.toJs(startedVm)
    //console.log(arr);
    if(arr.length >0 ){
      connectVm(arr.shift())
      startedVm=mori.set(arr)
    }

  },50000)
}
sendConnection()
function connectVm(ip){
  console.log('user -- ',_path.user,'password -- ',_path.password);
  var stringCmd=`xfreerdp /cert-ignore /v:${ip} /u:${_path.user} /p:${_path.password}`


 var ex=exec(stringCmd, (error, stdout, stderr) => {
   if (error) {
     console.error(`exec error: ${error}`);
     return;
   }
   console.log(`stdout: ${stdout}`);
   console.log(`stderr: ${stderr}`);
 });
 setTimeout(function(){
   ex.kill()
 },15000)
}
//180000

// let obj={cmd:'sh',
//           args:['-c',stringCmd],
//           options:{cwd:'/home/swapnil/projects/boothub/boothubr2/boothubr/ui_react_core_template/'},
//
// }
// var sp=spawn(obj.cmd,obj.args,obj.options);
// sp.stdout.on('data',(data)=>{
//   console.log('success data ',data.toString('utf8').split('\n'))
//
//
//
// })
// sp.stderr.on('data',(data)=>{
//
//  console.log('Error from spawn : ',data.toString('utf8'))
// })
// sp.on('close',(code)=>{
//
//  console.log('Clossing spawn execution ',obj.args)
// })
