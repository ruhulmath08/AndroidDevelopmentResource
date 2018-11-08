import mori from 'mori'
import {setLicenseInfo,setUserList,add_into_appList,remove_from_appList,setVmMapping,logout,userExistChange,createUserResult,showFailureNotification,setAuthentication,setSelectedLabNumber,shutdown,reboot,chooseMacIPS,setAppList,setEntries,setToggle,setDialogIsOpen,setMessageDialog,setApplistDialog,setInstalledApps} from '../actions/core'
let INITIAL_STATE=mori.hashMap();
import {LICENSE_INFO_ACTION} from '../path';

export default function (state=INITIAL_STATE,action){

  switch(action.type){
    case 'SET_ENTRIES':
    // console.log('...reducer...',setEntries(state , action.entries))
      return setEntries(state , action.entries);
      break;
    case 'TOGGLE':
    	return  setToggle(state,action.dropdownOpen) ;
      break;
		case 'IS_OPEN_DIALOG':
			return setDialogIsOpen(state,action.value);
      break;
    case 'IS_OPEN_MESSAGE':
      return setMessageDialog(state,action.value);
      break;
    case 'IS_OPEN_APP_LIST':
        return setApplistDialog(state,action.value);
        break;
    case 'INSTALLED_APPS':
        return setInstalledApps(state,action.mac,action.index);
        break;
    case 'SET_APP_LIST':
        return setAppList(state,action.apps);
        break;
    case 'MAC_IP_LIST':
          return chooseMacIPS(state,action.macList,action.osType);
    case 'SET_SELECTED_LAB_NUMBER':
        return setSelectedLabNumber(state,action.labNumber,action.machine_type)
        break;
    case 'SET_AUTHENTICATION':
        return setAuthentication(state,action.data);
        break;
    case  'CREATE_USER_RESULT':
        return createUserResult(state,action.data);
      break;
    case 'USER_EXIST_CHANGE':
      return userExistChange(state,action.data)
      break;
    case 'LOGOUT':
      return logout(state)
      break;

    case 'VM_MAPPING':
      return setVmMapping(state,action.data)
      break;
    case 'SET_USER_LIST':
      return setUserList(state,action.userList)
      break;
    case LICENSE_INFO_ACTION:
      return setLicenseInfo(state, action.payload);
      break;
    default :
        return state;

  }
  return state;
}
