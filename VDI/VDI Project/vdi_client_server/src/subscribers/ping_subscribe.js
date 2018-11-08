var _init=require('../init');
var subscriber_success=_init.subscriber;
var subscriber_fail=_init.subscriber;

export default function ping_subscribe(){
  subscriber_success.subscribe('ping_success');
  subscriber_fail.subscribe('ping_fail');
}
subscriber_success.on('message',(channel,msg)=>{
  let pingObj=JSON.parse(msg);
  console.log(msg);
})
subscriber_fail.on('message',(channel,msg)=>{
  let pingObj=JSON.parse(msg);
  console.log(msg);
})
