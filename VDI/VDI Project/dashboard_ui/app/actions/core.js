var mori=require('mori');

export function setLicenseInfo(state, licenseList) {
  return mori.assoc(state, 'licenseList', licenseList )
}
export function setEntries(state, newState){
  console.log('into setEntries')
  return mori.into(state , mori.hashMap('entries',
        newState.reduce((vec,kv)=>{

                  return mori.conj(vec,kv);
                }, mori.vector())) );
}
export function setToggle(state,val){
	//console.log('in setToggle',val)
	return state;
}
export function setDialogIsOpen(state,val){
  return mori.conj(state,mori.hashMap('isOpen',val));
}
export function setMessageDialog(state, val){
  return mori.conj(state,mori.hashMap('isOpenMsg',val));
}
export function setApplistDialog(state,val){

  return mori.conj(state,mori.hashMap('isOpenApp',val));
}
export function setInstalledApps(state,mac,index){
  //mori.conj(state,mori.hashMap('installedApps',mori.toJs(mori.get(mori.toClj(mori.getIn(state,['entries',index])),mac)).installedApps));

  return mori.conj(state,mori.hashMap('installedApps',Object.values(filterInstalledApps(state,mac))[0]['installedApps']))
}
function filterInstalledApps(state,mac){

  return mori.toJs(mori.get(state,'entries')).filter((single,index)=>{

    return Object.keys(single)[0] === mac
  })[0]

}
export const setAppList=(state,appList)=>{
  return mori.assoc(state,'VM_WIN',appList[0].VM_WIN,'VM_LINUX',appList[1].VM_LINUX);
}
export const chooseMacIPS=(state,macList,osType)=>{

  if(osType==='win32'){
    return mori.assoc(state,'type','VM_WIN','macList',macList)
  }else if(osType==='linux'){
    return mori.assoc(state,'type','client','macList',macList)
  }else if (osType === 'vm_linux') {
    return mori.assoc(state,'type','vm_linux','macList',macList)
  }else {
    return state;
  }
}
export const initialStore=setEntries(mori.hashMap(),[]);
export function setSelectedLabNumber(state,labNumber,type) {
  if(type=== 'VM_WIN'){
    return mori.assoc(state,'VM_WIN_selectedLabNumber',labNumber);
  }else if (type === 'CLIENT') {
    return mori.assoc(state,'CLIENT_selectedLabNumber',labNumber);
  }else if (type === 'VM_LINUX') {
    return mori.assoc(state,'VM_LINUX_selectedLabNumber',labNumber)
  }else {
     return state;
  }
}
export function setAuthentication(state,data){
  if(data.isLoggedIn===false){
    return mori.assoc(state,'userData',data,'isLoggedIn',false,'failAttemps', mori.get(state,'failAttemps') != undefined ? mori.get(state,'failAttemps')+1 : 1 )
  }else{
    return mori.assoc(state,'userData',data,'isLoggedIn',true)
  }

}
export function showFailureNotification(state,value) {
  return mori.assoc(state,'showFailureNotification',value)
}
export function createUserResult(state,value) {

  if(value.result===true){
    return mori.assoc(state,'createUser',mori.get(state,'createUser') != undefined ? mori.get(state,'createUser')+1 : 1 , 'userExist',false,'previousCountedCreatedUser',mori.get(state,'previousCountedCreatedUser') != undefined ? mori.get(state,'previousCountedCreatedUser')+1 : 0)
  }else{

    return mori.assoc(state, 'userExist',true)
  }

}
export function userExistChange(state,data) {
  if(data===false){
    return mori.assoc(state,'userExist',false)
  }else {
    return mori.assoc(state,'userExist',true)
  }
}
export function logout(state){
  return mori.hashMap()
}
export function setVmMapping(state,data) {
  return mori.assoc(state,'vm_mapping',mori.toClj(data))
}
export function setUserList(state,userList) {
  return mori.assoc(state,'userList',userList)
}
