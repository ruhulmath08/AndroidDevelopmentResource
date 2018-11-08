// @flow
/**
 * @fileoverview Actions
 * @description - Redux actions are functions which mapped to a reducer function.Every function must have type.
 */
import * as constants from '../constants';
import {history} from '../../app/index';
import Notification from '../models/notification';

/**
 * @function winFileTransfer
 * @param {Array<Object>} fileObjList 
 * @param {Array<String>} macList 
 */
export function winFileTransfer(fileObjList,  macList) {
  return (
    {
      type : constants.WIN_FILE_TRANSFER,
      payload: {
        fileObjList : fileObjList,
        macList : macList
      }
    }
  )
}
/**
 * @function winAppAddToList
 * @param {String} winAppName 
 */
export function winAppAddToList(winAppName) {
  return {
    type : constants.WIN_APP_ADD_INTO_LIST,
    payload : winAppName
  }
}
/**
 * @function winAppFileAdd
 * @param {Object} data  - form elements
 * @param {String} appName 
 */
export function winAppFileAdd(data, appName) {
  return {
    type : constants.WIN_APP_ADD,
    payload : {
      data : data,
      appName : appName
    }
  }
}

/**
 * @function goBackRoute
 * @description Navigation back
 */
export function goBackRoute() {
  history.goBack()
  return {
    type : constants.GO_BACK
  }
}

/**
 * @function deleteClient
 * @param {string} mac         
 */
export function deleteClient(mac) {
  return {
    type: constants.DELETE_CLIENT,
    payload: mac
  }
}

/**
 * @function setState
 * @param {Object} state         
 */
export function setState(state){
  return {
    type:'SET_ENTRIES',
    entries: state
    }
}

/**
 * @function setToggleActions
 * @param {Object} val         
 */
export function setToggleActions(val){
	return {type:'TOGGLE',
			val
			}
}

/**
 * @function isOpenDialog
 * @param {Object} val         
 */
export function isOpenDialog(val){
  return {type:'IS_OPEN_DIALOG',
  value:val
};
}

/**
 * @function isOpenMessage
 * @param {Object} val         
 */
export function isOpenMessage(val){
  return {type:'IS_OPEN_MESSAGE',
  value:val
}
};

/**
 * @function isOpenAppList
 * @param {Object} val         
 */
export function isOpenAppList(val){

  return {type:'IS_OPEN_APP_LIST',
  value:val
}
}

/**
 * @function getInstalledApps
 * @param {String} mac  
 * @param {Number} index        
 */
export function getInstalledApps(mac,index){
  return { type: 'INSTALLED_APPS',
            mac:mac,
            index:index
}
}

/**
 * @function addNewNotification
 * @param {String} notification         
 */
export function addNewNotification(notification ){
  return {
    type: 'NEW_NOTIFICATION',
    notification : notification
  }
}

/**
 * @function setAppList
 * @param {Array} appList         
 */
export function setAppList(appList){
  return {type:'SET_APP_LIST',
          apps:appList
  }
}

/**
 * @function bulkInstall
 * @param {Array} items  
 * @param {string} system
 * @param {Array} macList       
 */
export function bulkInstall(items,system,macList){
  return {
    type:'BULK_INSTALL',
    items:items,
    osType:system,
    macList:macList
  }
}

/**
 * @function bulkUnInstall
 * @param {Array} items  
 * @param {string} system
 * @param {Array} macList       
 */
export function bulkUnInstall(items,system,macList){
  return {
    type:'BULK_UNINSTALL',
    items:items,
    osType:system,
    macList:macList
  }
}
//choose mac _ips to hit commands

/**
 * @function chooseMacIPS
 * @param {Array} macList 
 * @param {String} system 
 */
export function chooseMacIPS(macList,system){
  return {
    type:'MAC_IP_LIST',
    macList:macList,
    osType:system
  }
}

/**
 * @function shutdown
 * @param {String} mac 
 * @param {String} type 
 */
export function shutdown(mac,type){
  return {
    type:'SHUTDOWN',
    mac:mac,
    machine_type:type,
  }
}

/**
 * @function reboot
 * @param {String} mac 
 * @param {String} type 
 */
export function reboot(mac,type){
  return {
    type:'REBOOT',
    mac:mac,
    machine_type:type,
  }
}
/**
 * @function 
 * @param {number} labNumber 
 * @param {string} type 
 */
export function setSelectedLabNumber(labNumber,type){
  return {
    type : 'SET_SELECTED_LAB_NUMBER',
    labNumber: labNumber,
    machine_type : type
  }
}
/**
 * @function setAuthentication
 * @param {Object} obj 
 * @description Store authentication data into redux.
 */
export function setAuthentication(obj){
  return {
    type:'SET_AUTHENTICATION',
    data:obj
  }
}
/**
 * @function submitLogin
 * @param {{user: string, password: string}} logInObj 
 */
export function submitLogin(logInObj){
  return {
    type : 'LOGIN',
    data:logInObj
  }
}

/**
 * @function defaultValue
 * @param {Boolean} check 
 * @param {Object} value 
 */
export function defaultValue(check,value) {
  return (typeof check !== 'undefined' ? check : value)
}
/**
 * @function createUser
 * @param {string} name 
 * @param {string} id 
 * @param {string} password 
 * @param {string} role 
 */
export function createUser(name,id,password,role){
  var data={
    name:name,
    userId:id,
    password:password,
    role:role,
  }
  return {
    type : 'CREATE_USER',
    data:data,
  }
}

/**
 * @function createUserResult
 * @param {String} result 
 */
export function createUserResult(result) {
  return {
    type: 'CREATE_USER_RESULT',
    data:result
  }
}

/**
 * @function userExistChange
 * @param {Object} value 
 */
export function userExistChange(value){
  return {
    type:'USER_EXIST_CHANGE',
    data:value
  }
}
/**
 * @function logout
 * @description Remove the store data and navigate to login page
 */
export function logout(){
  return {
    type:'LOGOUT'
  }
}
/**
 * @function singleVmMapping
 * @param {string} clientMac 
 * @param {string} vmWinMac 
 * @param {string} vmLinMac 
 * @param {string} vmIp 
 * @description Client -> Windows VM OR Client -> Linux VM. 
 */
export function singleVmMapping(clientMac,vmWinMac,vmLinMac,vmIp) {
  console.log(' Single VM Mapping ',clientMac,vmWinMac,vmLinMac,vmIp);
  if(vmLinMac === ''){
    return {
      type : 'CLIENT_WINVM_MAPPING',
      clientMac:clientMac,
      vmWinMac:vmWinMac,
      vmWinIP:vmIp
    }
  }else{
    return {
      type : 'CLIENT_LINVM_MAPPING',
      clientMac:clientMac,
      vmLinMac:vmLinMac,
      vmLinuxIP:vmIp,
    }
  }
}

/**
 * @function setVmMapping
 * @param {Object} data 
 * @description Send VM mapping data to server and update the dashboard ui
 */
export function setVmMapping(data){
  return {
    type:'VM_MAPPING',
    data:data
  }
}
/**
 * @function submitLinuxApp
 * @param {Array<string>} values 
 * @description Add command list of installing Linux package.
 */
export function submitLinuxApp(values){
  return {
    type:'LINUX_APP',
    data:values
  }
}

/**
 * @function setUserList
 * @param {Array<User>} userList 
 * @description Save User List into redux store.
 */
export function setUserList(userList){
  return {
    type:'SET_USER_LIST',
    userList:userList
  }
}

/**
 * @function executeClientCmd
 * @param {string} cmd 
 * @param {Array<string>} macList 
 * @description Send commands to selected Think Clients.
 */
export function executeClientCmd(cmd,macList) {
  return {
    type:'CLIENT_CMD',
    cmd:cmd,
    macList:macList
  }
}
/**
 * @function submitToken
 * @param {string} token 
 * @returns type
 */
export function submitToken(token) {
  return {
    type: constants.SUBMIT_TOKEN,
    payload: token
  }
}
