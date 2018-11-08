var _init=require('../init');
var _path=require('../path');
import * as actions from '../redux/actions';
var appInstallationSubscriber=_init.subscriber;
export default function appInstallationReply(store){

  appInstallationSubscriber.subscribe(_path.appInstallationSubscriber);
  appInstallationSubscriber.on('message',function(channel,msg){
    if(channel===_path.appInstallationSubscriber){
      var parsedObj=JSON.parse(msg);
      //check which type response install,uninstall then update store

      switch (parsedObj.outPutObj.type) {
        case 'INSTALL':
          return store.dispatch(actions.updateInstallApp(parsedObj.mainObj.mac,parsedObj.outPutObj.appName.split('.msi')[0]))
          break;
        case 'UNINSTALL':
          return store.dispatch(actions.updateUninstallApp(parsedObj.mainObj.mac,parsedObj.outPutObj.appName.split('.msi')[0]))
          break;
        default:

      }
    }
  })
}
