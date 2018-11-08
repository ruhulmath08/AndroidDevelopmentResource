import {Map,List} from 'immutable';
import mori from 'mori';
export const INITIAL_STATE = mori.hashMap();
import {getRedis} from '../init';
import * as _path from '../path';
import {createClientWin,createClientLinux} from '../model/Client_Service';
import * as actions from './actions';
import {store} from '../index';
function getWinners(vote) {
  if (!vote) return List.of();
  const [a, b] = vote.get('pair');
  const aVotes = vote.getIn(List.of('tally', a), 0);
  const bVotes = vote.getIn(List.of('tally', b), 0);
  if      (aVotes > bVotes)  return List.of(a);
  else if (aVotes < bVotes)  return List.of(b);
  else                       return List.of(a,b);
}
export function next(state) {
  const entries = state.get('entries')
                       .concat(getWinners(state.get('vote')));
  if (entries.size === 1) {
    return state.remove('vote')
                .remove('entries')
                .set('winner', entries.first());
  } else {
    return state.merge({
      vote: Map({pair: entries.take(2)}),
      entries: entries.skip(2)
    });
  }
}

export function vote(voteState, entry) {
  return voteState.updateIn(
    ['tally', entry],
    0,
    tally => tally + 1
  );
}

export function setEntries(state, entries) {
  return mori.assoc(state,'entries',entries);
}

export function updateStatus(state, val, clientObj , store){

  var updatedState='';
  var i=0;
  var exist=false;

  mori.toJs(mori.get(state,'entries')).forEach((single,index)=>{
    if(Object.keys(single)[0]===clientObj.mac){

      exist=true;
    }
  })

  if(exist === false && clientObj.system === 'linux'){
    var hostname=`odduu-cl${clientObj.lab}-pc${clientObj.pc}`

    mori.toJs(mori.get(state,'entries')).forEach((single,index)=>{

      if(hostname===`odduu-cl${Object.values(single)[0]['lab']}-pc${Object.values(single)[0]['pc']}`){
        var lab=Object.values(single)[0]['lab'];
        var pc=Object.values(single)[0]['pc'];

        mori.toJs(mori.get(state,'entries')).forEach((single,index)=>{
          if(lab === Object.values(single)[0]['lab'] && pc === Object.values(single)[0]['pc']){
              updatedState=mori.toClj(
                mori.updateIn(state,['entries',index],function(){
                  let keys=Object.keys(Object.values(single)[0])
                  let values=Object.values(Object.values(single)[0])
                  let newObj=createClientLinux(true,clientObj.lab,clientObj.pc,clientObj.ip, clientObj.startTime, 'Lab', clientObj.apps,clientObj.system)


                  return mori.hashMap(clientObj.mac,newObj)
                })
              )

          }
        })
      }
    })
  }
  if(updatedState != ''){
    console.log('in updatedState',updatedState);
    return updatedState;
  }else{
    return(
    mori.toClj(
      exist === true ?
        mori.toJs(mori.get(state,'entries')).map((entry,index)=>{

            if(Object.keys(entry)[0]===clientObj.mac){
              i=index;
              return mori.updateIn(state,['entries',index],function(){
                let keys=Object.keys(Object.values(entry)[0])
                let values=Object.values(Object.values(entry)[0])
                let newObj=mori.hashMap();
                for(var i=0;i<keys.length;i++){
                  if(keys[i]==='active'){
                    newObj=mori.assoc(newObj,keys[i],val)
                  }
                  if(keys[i]!='active'){
                    newObj=mori.assoc(newObj,keys[i],values[i])
                  }
                }

                return mori.hashMap(clientObj.mac,newObj)
              })
            }

        })[i]
        :
        (mori.toJs(setUpdateEntries(clientObj,state,store)))

    )
  )
  }
}
function setUpdateEntries(clientObj,state,store){
  var mac=clientObj.mac


  getRedis(_path.MACHINE_DATA.concat(mac)).then((values)=>{
    if(values===null){
      return state;
    }

    let val=JSON.parse(values);
    let newClient=mori.vector();
    if(val.system === 'win32'){
      newClient=createClientWin(true,val.ip.split('.')[2],val.ip, val.startTime, 'Lab', val.apps,val.system)
    }else{
      newClient=createClientLinux(true,val.lab,val.pc,val.ip, val.startTime, 'Lab', val.apps,val.system)
    }

    let newEntries=mori.conj(mori.get(state,'entries'),mori.hashMap(mac,newClient));

    var exist=false;
    mori.toJs(mori.get(state,'entries')).forEach(function(single,index){
      console.log(single);
      if(single.system === 'linux' && single.lab== clientObj.lab && single.pc === pc ){
        exist=true
      }
    })
    if(exist === false){
      console.log('in added new client',newEntries)
      store.dispatch(actions.updateEntries(newEntries))
      store.dispatch(actions.addNewVm_mapping(clientObj))
    }

  })
  return state;
}
export function updateEntries(state,entries) {
  return mori.assoc(state,'entries',entries);
}
export function setAppList(state,appList){

  return mori.assoc(state,'appList',appList);
}
export function updateInstallApp(state,mac,appName){
  var i=0;
   return(
     mori.toClj(
       mori.toJs(mori.get(state,'entries')).map(function(single,index){
         if(Object.keys(single)[0]===mac){
           i=index;
           return mori.updateIn(state,['entries',index],function(){
             let keys=Object.keys(Object.values(single)[0])
             let values=Object.values(Object.values(single)[0])
             let newObj=mori.hashMap();
             for(var i=0;i<keys.length;i++){
               if(keys[i]==='installedApps'){
                 var exist=false;
                 values[i].forEach(function(app,index){
                   if(app.includes(appName)){
                     exist=true;

                   }
                 })

                 if(exist===true){
                   newObj=mori.assoc(newObj,keys[i],values[i])

                 }else{
                   let newValues=values[i] || [];
                   newValues.push(appName);
                   newObj=mori.assoc(newObj,keys[i],newValues)
                 }
               }

               if(keys[i]!='installedApps'){
                 newObj=mori.assoc(newObj,keys[i],values[i])
               }
             }

             return mori.hashMap(mac,newObj)
           })
         }
       })[i]
     )
   )



}
export function updateUninstallApp(state,mac,appName){
  var i=0;
  return (
    mori.toClj(
      mori.toJs(mori.get(state,'entries')).map(function(single,index){
        if(Object.keys(single)[0]===mac){
          i=index;
          console.log('index ', index);
          return mori.updateIn(state,['entries',index],function(){
            let keys=Object.keys(Object.values(single)[0])
            let values=Object.values(Object.values(single)[0])
            let newObj=mori.hashMap();
            for(var i=0;i<keys.length;i++){
              if(keys[i]==='installedApps'){

                values[i].forEach(function(app,index){
                  if(app.includes(appName)){
                    let newValues=values[i] || [];
                    newValues.splice(index,1)
                    newObj=mori.assoc(newObj,keys[i],newValues)
                    // console.log(newObj,'---');
                  }
                })


              }

              if(keys[i]!='installedApps'){
                newObj=mori.assoc(newObj,keys[i],values[i])
              }
            }
            // console.log('newObj ', newObj);
            return mori.hashMap(mac,newObj)
          })
        }
      })[i]
    )
  )

}
export function setVmMappingList(state,data) {
  return mori.assoc(state,'vm_mapping',data)
}
export function updateVmMapping(state,obj,system){
  if(system=== 'win32'){
    return mori.updateIn(state,['vm_mapping',obj.hostName],function(o){
      return mori.hashMap('win32',{ip:obj.ip,u:obj.u,p:obj.p},'linux',mori.get(o,'linux'))
    })
  }else {
    return mori.updateIn(state,['vm_mapping',obj.hostName],function(o){
      return mori.hashMap('win32',mori.get(o,'win32'),'linux',{ip:obj.ip,u:obj.u,p:obj.p})
    })
  }
}
export function addNewVm_mapping(state,data) {
  //check vm_mapping new entry or not
  var keys=[_path.vmMappingWin(data.mac),_path.vmMappingLinux(data.mac)]
   Promise.all(keys.map(function(single,index){
    return Promise.resolve({
      then:function(onFulfil,onReject){
        getRedis(single).then(function(result){
          if(result==null){
            return
          }
          return onFulfil(mori.hashMap(single.split('.')[2],result))
        })
      }
    })
  })).then(function(arr){
    var result=mori.hashMap('win32',JSON.parse(mori.get(arr[0],'VM_MAPPING_WIN')),'linux',JSON.parse(mori.get(arr[1],'VM_MAPPING_LINUX')))
    store.dispatch(actions.asyncGetRedis('REDIS_RESULT_NEW_VM',result,data))
  })
  return state;
}
export function redisResultNewVM(state,result,mainObj){

  var hostName=`odduu-cl${mainObj.lab}-pc${mainObj.pc}`;
  if(mainObj.lab != undefined && mainObj.pc != undefined){
    return mori.assoc(state,'vm_mapping',mori.conj(mori.get(state,'vm_mapping'),mori.hashMap(hostName,result)));
  }else {
    return state;
  }

}
export function add_into_appList(state, appName) {
  let previousState=mori.get(mori.get(state,'appList'),1)

  let vm_win=mori.get(mori.get(state,'appList'),0)
  if(vm_win.VM_WIN === undefined){
    vm_win=mori.toJs(vm_win)
    previousState=mori.toJs(previousState)
  }
  previousState=mori.toJs(mori.conj(mori.set(previousState.VM_LINUX),appName))
  console.log('previousState -- ',previousState);
  console.log('vm_win ',vm_win);
  let appList=[{VM_WIN:vm_win.VM_WIN},
  {VM_LINUX:previousState}
]


  console.log('appList -- ',appList);
  return mori.assoc(state,'appList',appList);
  //mori.assoc(state,'appList',mori.hashMap('VM_WIN',))
}
export function remove_from_appList(state, appName) {
  return state
}
export function setUserList(state,userList) {
  return mori.assoc(state,'userList',userList)
}
export function includeNewUser(state,data){
  var previousData=mori.get(state,'userList');
  previousData.push(data)

  return mori.assoc(state,'userList',previousData)
}
export function setLicenseInfo(state, licenseQtyObj) {
  //console.log(licenseQtyObj);
  return mori.assoc(state, 'licenseList', licenseQtyObj.licenseQty);
}
export function removeClient(state, removeObj) {
  var entries = mori.toJs(mori.get(state, 'entries'));
  entries = entries.filter(function(item, index) {
    return Object.keys(item)[0] != removeObj.mac
  })
  return setEntries(state, mori.toClj(entries));
}
export function winAppAddIntoList(state, appName) {
  var appList = mori.get(state, 'appList');
  if(appList[0].VM_WIN.indexOf(appName) == -1) {
    appList[0].VM_WIN.push(appName)
    return mori.assoc(state, 'appList', appList);
  }else {
    return state;
  }

}
