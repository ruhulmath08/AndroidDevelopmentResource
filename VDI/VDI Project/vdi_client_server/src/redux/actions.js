/**
 * @author Rakin Afser <r.afser01@gmail.com>
 * @fileoverview Redux Actions
 */
import * as _path from '../path';

export function winAppAddToList(winAppName) {
  return {
    type : _path.WIN_APP_ADD_INTO_LIST,
    payload : winAppName
  }
}
export const setEntries=(values)=>{
  return {type:'SET_ENTRIES',
          entries:values
}
}
export const removeClient = (obj) => {
  return {
    type: _path.DELETE_CLIENT,
    payload: obj
  }
}
export const updateStatus=(val , clientObj  , store )=>{

  return {
          type:'UPDATE_STATUS',
          active: val,
          clientObj: clientObj,
          store:store
  }
}
export const updateEntries=(entries)=>{
  return {
    type:'UPDATE_ENTRIES',
    entries:entries,
  }
}
export const setAppList=(appList)=>{
  return {
    type:'SET_APP_LIST',
    apps:appList
  }
}
export const updateInstallApp=(mac,appName)=>{
  return {
  type:'UPDATE_INSTALL_APP',
  mac:mac,
  appName:appName,

}
}
export const updateUninstallApp=(mac,appName)=>{
  return {
    type:'UPDATE_UNINSTALL_APP',
    mac:mac,
    appName:appName,
  }
}
export const setVmMappingList=(data)=>{
  return {
    type:'SET_VM_MAPPING',
    data:data
  }
}
export function updateVmMapping(obj,type) {
  return {
    type:'UPDATE_VM_MAPPING',
    data:obj,
    system:type
  }
}
export function addNewVm_mapping(obj){
  return {
    type:'ADD_NEW_VM_MAPPING',
    data:obj
  }
}
export function asyncGetRedis(type,result,mainObj){
  return {
    type:type,
    data:result,
    mainObj:mainObj,
  }
}
export function updateAppList(type,appName) {
  if(type === 'ADD'){
    return {
      type:'ADD_INTO_APPLIST',
      appName:appName
    }
  }else {
    return {
      type:'REMOVE_FROM_APPLIST',
      appName:appName
    }
  }
}
export function setUserList(userList) {
  return {
    type: 'SET_USER_LIST',
    userList:userList
  }
}
export function includeNewUser(data) {
  return {
    type:'INCLUDE_NEW_USER',
    data:data
  }
}
