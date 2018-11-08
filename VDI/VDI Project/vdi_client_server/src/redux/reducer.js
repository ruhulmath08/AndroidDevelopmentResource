import {winAppAddIntoList,removeClient,setLicenseInfo,includeNewUser,setUserList,add_into_appList,remove_from_appList, redisResultNewVM,addNewVm_mapping,updateVmMapping,setVmMappingList,updateEntries,setEntries,next,vote,INITIAL_STATE,updateStatus,setAppList,updateInstallApp,updateUninstallApp} from './core'
import {LICENSE_INFO_ACTION, DELETE_CLIENT, WIN_APP_ADD_INTO_LIST} from '../path';

export default function reducer(state=INITIAL_STATE, action) {
  var _that=this;
  switch (action.type) {
  case 'SET_ENTRIES':
    return setEntries(state, action.entries);
    break;
  case 'NEXT':
    return next(state);
    break;
  case 'VOTE':
    return state.update('vote',(voteUpdate)=> vote(voteUpdate,action.entry));
    break;
  case 'UPDATE_STATUS':
      return updateStatus(state,action.active,action.clientObj,action.store)
      break;
  case 'SET_APP_LIST':
    return setAppList(state,action.apps);
    break;
  case 'UPDATE_INSTALL_APP':
    return updateInstallApp(state,action.mac,action.appName);
    break;
  case 'UPDATE_UNINSTALL_APP':
      return updateUninstallApp(state,action.mac,action.appName);
      break;
  case 'UPDATE_ENTRIES':
    return updateEntries(state,action.entries)
    break;
  case 'SET_VM_MAPPING':
    return setVmMappingList(state,action.data)
    break;
  case 'UPDATE_VM_MAPPING':
    return updateVmMapping(state,action.data,action.system)

    break;
  case 'ADD_NEW_VM_MAPPING':

    return addNewVm_mapping(state,action.data)

    break;
  case 'REDIS_RESULT_NEW_VM':

    return redisResultNewVM(state,action.data,action.mainObj)

    break;
  case 'ADD_INTO_APPLIST':
    return add_into_appList(state, action.appName)
    break;
  case 'REMOVE_FROM_APPLIST':
    return remove_from_appList(state,action.appName)
    break;
  case 'SET_USER_LIST':
    return setUserList(state,action.userList)
    break;
  case 'INCLUDE_NEW_USER':
    return includeNewUser(state,action.data)
    break;
  case LICENSE_INFO_ACTION:
    return setLicenseInfo(state, action.payload);
    break;
  case DELETE_CLIENT:
    return removeClient(state, action.payload);
    break;
  case WIN_APP_ADD_INTO_LIST:
    return winAppAddIntoList(state, action.payload);
    break;
  default:
    return state;
}
}
