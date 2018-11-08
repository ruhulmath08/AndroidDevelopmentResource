import {makeStore} from './redux/store'
import {startServer} from './server'
import {fromJS} from 'immutable'
import {getMembers,publisher, getRedis} from './init';
import * as actions from './redux/actions'
import {clients_key} from './path';
import loadAllMachineData from './service/loadAllMachineData';
import loadUserList from './service/loadUserList';
import loadAllApps from './service/loadAllApps';
import mori from 'mori';
import {createClientWin,createClientLinux} from './model/Client_Service'
import {loadAppListFromDir} from './service/spawn';
import * as _path from './path';
import appInstallationReply from './subscribers/subscribeAppResult';
import loadAllMappedVM from './service/loadAllMappedVM';
import connect_win_vm from './connect_win_vm'
import {licenseServer} from './licenseServer';
import {loadLicenseList} from './service/loadLicenseList';
import{hostnameVSlicenseQty, loadLicenseQty, licenseListVSexpire} from './helper/licenseHelper';
import {loadInternetTime, timeInterval} from './helper/loadInternetTime';

// let obj={
// 	cmd:'sh',
// 	args:['-c','ls','-a'],
// 	options:{cwd:process.cwd()+_path.WINDOWS_FILE_SERVER},
// 	key:_path.VM_WIN_APPS,
// }
// loadAppListFromDir(obj);
export const store=makeStore();
startServer(store);
appInstallationReply(store);

export const loadData=function(){
	console.log('in loadData')
	return Promise.resolve({then:function(onFulfil,onReject){
		loadAllMachineData().then(res=>{

			return onFulfil(res);
		})
	}}).then(entries=>{
		store.dispatch(actions.setEntries(entries.reduce(function(vect,single,index){
			let val=Object.values(mori.toJs(single))[0];
			//console.log('----- loadAllMachineData ',val,createClientLinux(false,val.lab,val.pc,val.ip, val.startTime, 'Lab', val.apps,val.system))
			if(val.system==='win32'){
				return mori.conj(vect,mori.hashMap(
					Object.keys(mori.toJs(single))[0],
					createClientWin(false,val.ip.split('.')[2],val.ip, val.startTime, 'Lab', val.apps,val.system)
				))
			}else if (val.system === 'vm_linux') {
				return mori.conj(vect,mori.hashMap(
					Object.keys(mori.toJs(single))[0],
					createClientLinux(false,val.ip.split('.')[2],val.ip.split('.')[3],val.ip, val.startTime, 'Lab', val.apps,val.system)
				))
			}else{
				return mori.conj(vect,mori.hashMap(
					Object.keys(mori.toJs(single))[0],
					createClientLinux(false,val.lab,val.pc,val.ip, val.startTime, 'Lab', val.apps,val.system)
				))
			}
		},mori.vector())))
		loadAppList()

		})

}
export const loadAppList=function(){
	return Promise.resolve({then:function(onFulfil,onReject){
		loadAllApps().then(result=>{
			onFulfil(result)
		})
	}}).then(appList=>{
		store.dispatch(actions.setAppList(appList))

	})
}

loadData();
function loadAllVmMappingData() {
	loadAllMappedVM().then(function(data){
		var formattedData=data.reduce(function(obj,single,index){
			var win=''
			if(Object.keys(mori.toJs(mori.get(single,0)))[0].includes('VM_MAPPING_WIN') === true){
				win=Object.values(mori.toJs(mori.get(single,0)))[0]
			}else{
				win=Object.values(mori.toJs(mori.get(single,1)))[0]
			}
			var linux=''
			if(Object.keys(mori.toJs(mori.get(single,0)))[0].includes('VM_MAPPING_LINUX') === true){
				linux=Object.values(mori.toJs(mori.get(single,0)))[0]
			}else{
				linux=Object.values(mori.toJs(mori.get(single,1)))[0]
			}
			obj=mori.assoc(obj,Object.keys(mori.toJs(mori.get(single,0)))[0].split('.')[0],mori.hashMap('win32',JSON.parse(win),'linux',JSON.parse(linux)))
			return obj;
		},mori.hashMap())
		store.dispatch(actions.setVmMappingList(formattedData))
	})
}
loadAllVmMappingData()
loadUserList().then(function(res){
	store.dispatch(actions.setUserList(res))
});
loadLicenseList().then(function(res) {
	store.dispatch({
		type: _path.LICENSE_INFO_ACTION,
		payload: res
	});
})
loadLicenseQty().then(function(qty) {
	if(qty != undefined) {
		hostnameVSlicenseQty(parseInt(qty))
	}
})


loadInternetTime().then(function(result) {
	timeInterval(60*60*1000*24,loadInternetTime) // Execute loadInternetTime in every 24 hours
	licenseListVSexpire();
	timeInterval(60*60*1000*24, licenseListVSexpire);
})
// setTimeout(function(){
//
// }, 10000)
//Check and connect windows vm to start app
//connect_win_vm(store)
