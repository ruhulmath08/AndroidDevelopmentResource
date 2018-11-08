export const serverIp='192.168.223.34'
export const fileServerURL = 'http://192.168.223.34:8092';
export const announceToServerAlive='.announceToServerAlive'
export const clients_key='odduu.aiub.allClients';
export const key='odduu.aiub.';
export const VM_WIN_MAC_IPS=key.concat('MAC_IPS.VM_WIN');
export const CLIENT_MAC_IPS=key.concat('MAC_IPS.CLIENT');
export const VM_WIN_APPS=key.concat('APPS.VM_WIN');
export const VM_LINUX_APPS=key.concat('APPS.VM_LINUX');
export const MACHINE_DATA=key.concat('MACHINE_DATA.');
export const appInstallationSubscriber=serverIp.concat('.appInstallReply');
export const authenticateUser=(userId,password)=>{
  return key.concat('USER.').concat(userId).concat('.').concat(password);
}
export const checkUserExist=(userId)=>{
  return key.concat('USER.').concat(userId).concat('.*');
}
export const vm_mapping_win=(macIp)=>(
  key.concat('VM_MAPPING_WIN.').concat(macIp)
)
var CLIENT_HOST_NAMES=exports.CLIENT_HOST_NAMES=key.concat('CLIENT_HOST_NAMES')
//var CLIENT_HOST_NAMES=exports.CLIENT_HOST_NAMES=key.concat('VM_LINUX_HOST_NAMES')
var hostnameToMac=exports.hostnameToMac=function(hostname){
  return key.concat('HOSTNAME_TO_MAC.').concat(hostname);
}
var vmMappingWin=exports.vmMappingWin=function(macIp){
  return key.concat('VM_MAPPING_WIN.').concat(macIp);
}
var vmMappingLinux=exports.vmMappingLinux=function(macIp){
  return key.concat('VM_MAPPING_LINUX.').concat(macIp);
}
var ping_down_vm_win=exports.ping_down_vm_win=key.concat('ping_down_vm_win');
export const user='U1Win10';
export const password='Odduu1234';
export const checkUser='.checkUser'

export const linux_app_cmd=(key)=>{
  return VM_LINUX_APPS.concat('.').concat(key)
}
export const SUBMIT_TOKEN = 'SUBMIT_TOKEN';
export const ODDUU_SERVER_IP = key.concat('ODDUU_SERVER_IP');
export const CLIENT_ID =  key.concat('CLIENT_ID');
export const CLIENT_NAME = key.concat('CLIENT_NAME');
export const SUBMIT_TOKEN_REPLY= 'SUBMIT_TOKEN_REPLY';
export const LICENSE_INFO= 'LICENSE_INFO';
export const DB_LICENSE_LIST = key.concat('LICENSE_LIST');
export const LICENSE_INFO_ACTION = 'LICENSE_INFO_ACTION';
export const LICENSE_QTY = key.concat('LICENSE_QTY');
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const WIN_APP_ADD = 'WIN_APP_ADD';
export const WINDOWS_FILE_SERVER = '/FileServer/VM_WIN/';
export const WIN_APP_ADD_RESULT = 'WIN_APP_ADD_RESULT';
export const WIN_APP_ADD_INTO_LIST = 'WIN_APP_ADD_INTO_LIST';
export const FILE_SERVER_HTTP_VM_WIN=fileServerURL+'/VM_WIN/';
export const WIN_FILE_TRANSFER = "WIN_FILE_TRANSFER";
export const WIN_FILE_TRANSFER_RESULT = "WIN_FILE_TRANSFER_RESULT";
export const FILE_SERVER = '/FileServer/FILE/';
export const SEND_FILE_TO_CLIENT = 'SEND_FILE_TO_CLIENT';
export const FOLDER_WINDOWS_FILE = 'FILE';
