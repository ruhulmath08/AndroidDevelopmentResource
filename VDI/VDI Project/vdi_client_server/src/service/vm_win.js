import {receiver,getRedis,setRedis,getKeys,addMember} from '../init';
var _path=require('../path');

export const addWinAppIntoRedis= (appName, optionsObj) => {
  var name = Object.keys(optionsObj)[0]
  var obj = {
    appName: appName,
    [`${Object.keys(optionsObj)[0]}`] : Object.values(optionsObj)[0]
  }
  addMember(_path.VM_WIN_APPS, JSON.stringify(obj))
}

export const cmdGenerate = (Obj) => {
  var options = '';
  if(Obj.attributes != undefined ) {
    Obj.attributes.forEach((attr, index) => {
      options = options.concat(" ").concat(attr)
    })
  }else if (Obj.cmdField != undefined) {
    Obj.cmdField.forEach((cmd, index)=> {
      options = options.concat(" & ").concat(cmd)
    })
  }
  return {appName : Obj.appName,
    cmd : options,
    url : _path.FILE_SERVER_HTTP_VM_WIN.concat(Obj.appName)
  }; // return full cmd with options
}
