import {browserHistory} from 'react-router';
import mori from 'mori';
import * as constants from '../constants';
export default socket => store => dispatch => action => {
  //console.log('found in remoteMiddle')
  // socket.on('action',action)

  //if(action.meta && action.meta.remote){
  //  socket.emit('action',action)
  //}
  if (action.type === constants.WIN_FILE_TRANSFER) {
    socket.emit(constants.WIN_FILE_TRANSFER, action.payload)
  }
  if (action.type === constants.WIN_APP_ADD) {
    socket.emit(constants.WIN_APP_ADD, action.payload)
  }
  if(action.type === constants.DELETE_CLIENT) {
    socket.emit(constants.DELETE_CLIENT, action.payload);
  }
  if(action.type === constants.SUBMIT_TOKEN) {
    socket.emit(constants.SUBMIT_TOKEN, action.payload)
  }
  if(action.type === 'LINUX_APP'){
    socket.emit('linux_app',action.data)
  }
  if(action.type=== 'CLIENT_WINVM_MAPPING'){
    socket.emit('client_winvm_mapping',{
      clientMac:action.clientMac,
      vmWinMac:action.vmWinMac,
      vmWinIP:action.vmWinIP,
    })
  }
  if(action.type=== 'CLIENT_LINVM_MAPPING'){
    socket.emit('client_linvm_mapping',{
      clientMac:action.clientMac,
      vmLinMac:action.vmLinMac,
      vmLinuxIP:action.vmLinuxIP,
    })
  }

  if(action.type === 'CREATE_USER'){
    socket.emit('create_user_account',action.data)
  }
  if(action.type === 'LOGIN' ){
    console.log("Login action ");
    socket.emit('authentication',action.data)
  }
  if(action.type === 'BULK_INSTALL'){
    if(action.osType == 'win32'){
      socket.emit('bulkInstall',JSON.stringify({
        items:action.items,
        osType:action.osType,
        macList:action.macList
      }))
    }else if (action.osType == 'vm_linux') {
      socket.emit('bulkInstall_vm_linux',JSON.stringify({
        items:action.items,
        osType:action.osType,
        macList:action.macList
      }))
    }
  }
  if(action.type === 'BULK_UNINSTALL'){
    if(action.osType == 'win32'){
      socket.emit('bulkUnInstall',JSON.stringify({
        items:action.items,
        osType:action.osType,
        macList:action.macList
    }))
  }else if (action.osType == 'vm_linux') {
    socket.emit('bulkUnInstall_vm_linux',JSON.stringify({
      items:action.items,
      osType:action.osType,
      macList:action.macList
    }))
  }
  }
  if(action.type === 'SHUTDOWN'){
    socket.emit('shutdown',JSON.stringify({
      mac:action.mac,
      machine_type:action.machine_type
    }))
  }
  if(action.type === 'REBOOT'){
    socket.emit('reboot',JSON.stringify({
      mac:action.mac,
      machine_type:action.machine_type
    }))
  }
  if(action.type === 'CLIENT_CMD'){
    socket.emit('client_cmd',JSON.stringify(
      {
        cmd:action.cmd,
        macList:action.macList
      }
    ))
  }
  return dispatch(action);
}
