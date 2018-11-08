/**
 * @author Rakin Afser <r.afser01@gmail.com>
 * @fileoverview Start Server
 */
import Server from 'socket.io';
import {publisher,subscriber,receiver,getRedis,setRedis,getKeys,addMember} from './init';
var _path=require('./path');
import mori from 'mori';
import * as actions from './redux/actions';
import ClientCommunication from './model/ClientCommunication';
import UiCommunication from './model/UiCommunication';
import _ from 'lodash';
import {encrypterFun, decrypterFun} from './service/parserHax';
import {odduuServerIPSetUp} from './service/fsService';
import {licenseServer} from './licenseServer';
const fs = require('fs');
import * as _init from './init';
import {addWinAppIntoRedis, cmdGenerate} from './service/vm_win';

let connectedClient=mori.hashMap();
let connectedUi=[];
/**
 * @function startServer - Create a socket server and open events
 * @param {Object} store 
 */
export const startServer=(store)=>{
	/**
	 * 
	 * @description - This socket server communicate with Odduu Client
	 */
	const io= new Server().attach(8090)
	io.on('connection',(socket)=>{
		console.log('connection establised with client ')
		socket.emit('message','Connection reply from server -> '+_path.serverIp)

		setInterval(function(){
			socket.emit('healthCheck','Query healthData')
		},3000)
		socket.on('healthCheckReply',(data=>{
			// console.log('Health data -- ',data)
		}))
		socket.on('storeConnection',(mac)=>{
			connectedClient=mori.conj(connectedClient,mori.hashMap(mac,new ClientCommunication(socket)))
		})

	})
	/**
	 * 
	 * @description - This socket Server communicate with Dashboard UI server.
	 */
	const server_ui=new Server().attach(8091);
	server_ui.on('connection',(socket)=>{
		/**
		 * @event linux_app
		 * @description - This callback function will be invoked, when dashboard_ui project will emit.
		 */
		socket.on('linux_app',function(parsedObj){
			console.log('Adding linux app',parsedObj);
			addMember(_path.VM_LINUX_APPS,parsedObj.appName)
			setRedis(_path.linux_app_cmd(parsedObj.appName),JSON.stringify(parsedObj.cmd))
			store.dispatch(actions.updateAppList('ADD',parsedObj.appName))
		})
		/**
		 * @event DELETE_CLIENT
		 * @description Removing an Client from Client List
		 */
		socket.on(_path.DELETE_CLIENT, function(obj) {
			_init.removeMember(_path.CLIENT_HOST_NAMES, obj.hostName)
			store.dispatch(actions.removeClient(obj))
		})
		/**
		 * @event client_winvm_mapping
		 * @description Changing a Client -> Windows VM mapping.
		 */
		socket.on('client_winvm_mapping',function(parsedObj){

			getRedis(_path.vm_mapping_win(parsedObj.clientMac)).then(function(result){
				var parsedResult=JSON.parse(result);
				var newObj={};
				var mappedObj=Object.values(mori.toJs(mori.get(store.getState(),'entries')).filter(function(obj){
					return Object.keys(obj)[0]=== parsedObj.clientMac
				})[0])[0]
				var hostName=`odduu-cl${mappedObj.lab}-pc${mappedObj.pc}`
				console.log('parsedResult ',parsedResult,' parsedObj ',parsedObj,'hostName' ,hostName);
				if(parsedResult.ip.split(':').length>1){
					newObj={
						hostName:hostName,
						ip:`${parsedObj.vmWinIP}:${parsedResult.ip.split(':')[1]}`,
						u:parsedResult.u,
						p:parsedResult.p,
					}
					setRedis(_path.vm_mapping_win(parsedObj.clientMac),JSON.stringify({
						ip:`${parsedObj.vmWinIP}:${parsedResult.ip.split(':')[1]}`,
						u:parsedResult.u,
						p:parsedResult.p,
					}))

				}else{
					newObj={
						hostName:hostName,
						ip:`${parsedObj.vmWinIP}`,
						u:parsedResult.u,
						p:parsedResult.p,
					}
					setRedis(_path.vm_mapping_win(parsedObj.clientMac),JSON.stringify({
						ip:`${parsedObj.vmWinIP}`,
						u:parsedResult.u,
						p:parsedResult.p,
					}))

				}
				store.dispatch(actions.updateVmMapping(newObj,'win32'))
			})
			socket.emit('client_winvm_mapping_result',{result:true})
			var cmdObj={
			 'cmd':'sudo reboot',
			 'id':_path.shutdown_id,
			 serverIp:_path.serverIp,
			 type:'shelljs'
		 }
		 store.dispatch(actions.updateStatus(false,{mac:parsedObj.clientMac},store));
		 publisher.publish(parsedObj.clientMac.concat('.general'),JSON.stringify(cmdObj))
		})
		/**
		 * @event client_linvm_mapping
		 * @description Changing a Client -> Linux VM mapping.
		 */
		socket.on('client_linvm_mapping',function(parsedObj){

			getRedis(_path.vmMappingLinux(parsedObj.clientMac)).then( function ( result ) {
				var parsedResult=JSON.parse(result);
				var newObj={};
				var mappedObj=Object.values(mori.toJs(mori.get(store.getState(),'entries')).filter(function(obj){
					return Object.keys(obj)[0]=== parsedObj.clientMac
				})[0])[0]
				var hostName=`odduu-cl${mappedObj.lab}-pc${mappedObj.pc}`
				console.log('parsedResult ',parsedResult,' parsedObj ',parsedObj,'hostName' ,hostName);
				if(parsedResult.ip.split(':').length>1){
					newObj={
						hostName:hostName,
						ip:`${parsedObj.vmLinuxIP}:${parsedResult.ip.split(':')[1]}`,
						u:parsedResult.u,
						p:parsedResult.p,
					}
					setRedis(_path.vmMappingLinux(parsedObj.clientMac),JSON.stringify({
						ip:`${parsedObj.vmLinuxIP}:${parsedResult.ip.split(':')[1]}`,
						u:parsedResult.u,
						p:parsedResult.p,
					}))

				}else{
					newObj={
						hostName:hostName,
						ip:`${parsedObj.vmLinuxIP}`,
						u:parsedResult.u,
						p:parsedResult.p,
					}
					setRedis(_path.vmMappingLinux(parsedObj.clientMac),JSON.stringify({
						ip:`${parsedObj.vmLinuxIP}`,
						u:parsedResult.u,
						p:parsedResult.p,
					}))

				}
				store.dispatch(actions.updateVmMapping(newObj,'linux'))
			})
			socket.emit('client_linux_vm_mapping_result',{result:true})
			var cmdObj={
			 'cmd':'sudo reboot',
			 'id':_path.shutdown_id,
			 serverIp:_path.serverIp,
			 type:'shelljs'
		 }
		 store.dispatch(actions.updateStatus(false,{mac:parsedObj.clientMac},store));
		 publisher.publish(parsedObj.clientMac.concat('.general'),JSON.stringify(cmdObj))

		})
		/**
		 * @event create_user_account
		 * @description User account create action performed by this event.
		 */
		socket.on('create_user_account',function(parsedObj){
			console.log(parsedObj);
			getKeys(_path.checkUserExist(parsedObj.userId)).then(function(result){
				if(result.length === 0){

					var obj={
						name:parsedObj.name,
						role:parsedObj.role,
						imgLink:null,
						createdDate:new Date().getTime(),
					}

					setRedis(_path.authenticateUser(parsedObj.userId,parsedObj.password),JSON.stringify(obj))
					socket.emit('create_user_account_result',{result:true})
					store.dispatch(actions.includeNewUser(obj))
				}else{
					socket.emit('create_user_account_result',{result:false})
				}
			})
		})
		/**
		 * @event bulkInstall
		 * @description VM_Mapping - Windows Install button will hit this event. 
		 */
		socket.on('bulkInstall',function(obj){
			//console.log('msg from UI for bulk installation ',JSON.parse(obj));
			// mori.intoArray(connectedClient).forEach(function(rawCliet){
			// 	var client=mori.toJs(rawCliet);
			// 	client[1].sendBulkInstallCMD(obj)
			// })
			var parsedObj=JSON.parse(obj)

			parsedObj.macList.forEach(function(mac,index){
				var cmdList = parsedObj.items.reduce((array, single, index)=> {
					var parsedSingle = JSON.parse(single);
					console.log(parsedSingle);
					array.push(cmdGenerate(parsedSingle))
					return array ;
				},[])
				var obj = {
					osType : 'win32',
					items : cmdList,

				}
				publisher.publish(mac.concat('.bulkInstall'),JSON.stringify(obj))
			})

		})
		socket.on('bulkInstall_vm_linux',function(obj){
			var parsedObj=JSON.parse(obj)


				getRedis(_path.linux_app_cmd(parsedObj.items[0])).then(function(result){
					var parsedResult=JSON.parse(result)
					parsedObj.macList.forEach(function(mac,index){
						publisher.publish(mac.concat('.bulkInstall'),result)
					})
				})


		})
		/**
		 * @event bulkUnInstall
		 * @description Receive an event from Dashboard UI and send a signal to Windows VM.
		 */
		socket.on('bulkUnInstall',function(obj){
			//obj : {items : [appList]}
			// console.log('msg from UI for bulk Un-installation ',JSON.parse(obj));
			// mori.intoArray(connectedClient).forEach(function(rawCliet){
			// 	var client=mori.toJs(rawCliet);
			// 	client[1].sendBulkUninstallCmd(obj)
			// })
			var parsedObj=JSON.parse(obj)
			console.log(parsedObj);
			parsedObj.macList.forEach(function(mac,index){
				console.log(mac.concat('.bulkUnInstall'));
				var appNameList = parsedObj.items.reduce((array, item, index)=> {
					array.push({
						appName: JSON.parse(item).appName
					})
					return array;
				},[])
				publisher.publish(mac.concat('.bulkUnInstall'),JSON.stringify({
					items : appNameList,
					osType : 'win32',
					macList : parsedObj.macList
				}))
			})


		})
		/**
		 * @event bulkUnInstall_vm_linux
		 * @description Receive an event from Dashboard UI and send a signal to Linux VM.
		 */
		socket.on('bulkUnInstall_vm_linux',function(obj){
			var parsedObj=JSON.parse(obj);
			console.log('unInstallLinuxApp ',parsedObj);
			parsedObj.macList.forEach(function(mac,index){
				publisher.publish(mac.concat('.bulkUnInstall'),obj)
			})

		})
		/**
		 * @event shutdown
		 * @description Receive an Event from Dashboard to shutdown a VM OR Client.
		 */
		socket.on('shutdown',function(obj){
			var parsedObj=JSON.parse(obj);
			var cmdObj={};
			if(parsedObj.machine_type === 'CLIENT' || parsedObj.machine_type === 'VM_LINUX'){
				 cmdObj={
					'cmd':'sudo poweroff',
					'id':_path.shutdown_id,
					serverIp:_path.serverIp,
					type:'shelljs'
				}
			}else if (parsedObj.machine_type === 'VM_WIN') {
				 cmdObj={
					'cmd':'shutdown /s /t 0',
					'id':_path.shutdown_id,
					serverIp:_path.serverIp,
					type:'shelljs'
				}
			}

			store.dispatch(actions.updateStatus(false,parsedObj,store));
			publisher.publish(parsedObj.mac.concat('.general'),JSON.stringify(cmdObj))
		})
		/**
		 * @event reboot
		 * @description Receive an Event from Dashboard to reboot a VM OR Client.
		 */
		socket.on('reboot',function(obj){
			var parsedObj=JSON.parse(obj);
			console.log(parsedObj);
			var cmdObj={};
			if(parsedObj.machine_type === 'CLIENT' || parsedObj.machine_type === 'VM_LINUX'){
				cmdObj={
					'cmd':'sudo reboot',
					'id':_path.shutdown_id,
					serverIp:_path.serverIp,
					type:'shelljs'
				}
			}else if (parsedObj.machine_type === 'VM_WIN') {
				cmdObj={
					'cmd':'shutdown /r /t 0',
					'id':_path.shutdown_id,
					serverIp:_path.serverIp,
					type:'shelljs'
				}
			}
			store.dispatch(actions.updateStatus(false,parsedObj,store));
			publisher.publish(parsedObj.mac.concat('.general'),JSON.stringify(cmdObj))

		})
		/**
		 * @event authentication
		 * @description Dashboard User Sign-in event.
		 */
		socket.on('authentication',function(obj){
			var parsedObj=obj;
			console.log("Reqest for login ", parsedObj);
			//console.log('user key ',_path.authenticateUser(parsedObj.userId,parsedObj.password))
			getRedis(_path.authenticateUser(parsedObj.userId,parsedObj.password)).then(function(result){
				console.log('authenticateUser result ',result)
				if(result != null){
					// console.log('connected to Server_UI');
					// console.log('store getState',mori.toJs(store.getState()))
					socket.emit('initialData',mori.toJs(store.getState()));
					socket.emit('authenticationResult',result)
					connectedUi.push(new UiCommunication(socket));


				}else{
					console.log('login data failed')
					socket.emit('authenticationResult',{isLoggedIn:false})
				}
			})
		})
		/**
		 * @event client_cmd
		 * @description Send command to  Think clients.
		 */
		socket.on('client_cmd',function(obj){
			console.log(String(JSON.parse(obj).cmd));
			var parsedObj=JSON.parse(obj)
			var parsedCmd=String(JSON.parse(obj).cmd)
			parsedObj.macList.forEach(function(mac,index){
				console.log(mac.concat('.client_cmd'));
				publisher.publish(mac.concat('.client_cmd'),JSON.stringify(JSON.parse(obj).cmd))
			})
		})
		/**
		 * @event SUBMIT_TOKEN
		 * @description This event will be fired when dashboard token verification will be triggered.
		 */
		socket.on(_path.SUBMIT_TOKEN, function(tokenObj) {
			var parsedToken = decrypterFun(tokenObj.token);
			if(parsedToken.odduu_server != undefined && parsedToken.clientId != undefined
				&& parsedToken.clientName!= undefined){
				_init.setRedis(_path.ODDUU_SERVER_IP, parsedToken.odduu_server);
				_init.setRedis(_path.CLIENT_ID, parsedToken.clientId);
				_init.setRedis(_path.CLIENT_NAME, parsedToken.clientName);

				// Connect With ODDUU SERVER;
				licenseServer(parsedToken.odduu_server, encrypterFun({
					clientId: parsedToken.clientId,
					clientName: parsedToken.clientName
				}), socket, store);
			}else if (parsedToken == false) {
				socket.emit(_path.SUBMIT_TOKEN_REPLY, {result: false})
			}

		})
		socket.on(_path.WIN_APP_ADD, function(data) {
			fs.writeFile('./'+_path.WINDOWS_FILE_SERVER+'/'+data.appName, data.data.WIN_APP_INPUT_FILE[0], (err)=>{
				var resultObj = {};
				if(err) {
					resultObj['appName'] = data.appName;
					resultObj['result'] = false ;
					socket.emit(_path.WIN_APP_ADD_RESULT,resultObj)
					console.log(err);
					return ;
				}
				resultObj['appName'] = data.appName;
				resultObj['result'] = true ;
				socket.emit(_path.WIN_APP_ADD_RESULT,resultObj)
				if(data.attributes != undefined ) {
					addWinAppIntoRedis(data.appName, {attributes: data.attributes})
				} else if (data.cmdField != undefined ) {
					addWinAppIntoRedis(data.appName, {cmdField : data.cmdField})
				}else {
					addWinAppIntoRedis(data.appName, {attributes: ['/quiet']});
				}
				store.dispatch(actions.winAppAddToList(data.appName))
			})
		})
		/**
		 * @event WIN_FILE_TRANSFER
		 * @description Binary file (Such as, pdf doc etc.) send to client machine from dashboard.
		 */
		socket.on(_path.WIN_FILE_TRANSFER, (data) => {
			console.log('got it ', data);
			if(data.fileObjList != undefined && data.fileObjList.length > 0) {
				var fileSavePromise = data.fileObjList.map((item, index) => {
					return new Promise((resolve, reject) => {
						fs.writeFile('./'+_path.FILE_SERVER+'/'+item.fileName, item.file, (err)=>{
							var resultObj = {};
							if(err) {
								resultObj['result'] = false ;
								resultObj['fileName'] = item.fileName
								console.log(err, __dirname);
								reject({resultObj})
								return ;
							}
							resultObj['result'] = true;
							resultObj['fileName'] = item.fileName;
							return resolve(resultObj)
						})
					})
				})
				var completeWrite = Promise.all(fileSavePromise).then((result) => {
					setTimeout(()=> {
						console.log(result);
						var resultWithUrl = Object.assign({},
							{
								url: _path.fileServerURL,
								folder : _path.FOLDER_WINDOWS_FILE,
								fileObjList : result
							});
							console.log('finish');
						data.macList.forEach((mac, index) => {
							publisher.publish(mac.concat('.').concat(_path.SEND_FILE_TO_CLIENT), JSON.stringify(resultWithUrl))
						})
						socket.emit(_path.WIN_FILE_TRANSFER_RESULT,result)
					},3000)
				})
			}
		})
	})


	subscriber.subscribe(_path.serverIp+_path.announceToServerAlive)
	/**
	 * @event announceToServerAlive
	 * @description Redis publish event will fire this.
	 */
	subscriber.on('message',(chanel,msg)=>{
		if(chanel===_path.serverIp+_path.announceToServerAlive){
			var parsedMsg=JSON.parse(msg);
			console.log('client awake msg mac ip ',parsedMsg);
			//debug why updateStatus does not works if their are multiple entry
			store.dispatch(actions.updateStatus(true,parsedMsg,store));
		}
	})
	/**
	 * @event storeSubscribe
	 * @description - Any change of redux-store, will fire this event.
	 */
	store.subscribe(()=>{
		console.log('-- updated store -- ',store.getState());
		connectedUi.forEach(function(ui){
			ui.sendUpdatedState(store);
		})
	})
	// })
	// const io= new Server().attach(8090)
	// store.subscribe(()=> {
	//
	// 	console.log('---------',store.getState().toJS())
	//
	// 	return io.emit('state',store.getState().toJS())
	// })
	// io.on('connection',(socket)=>{
	// 	socket.emit('state',store.getState().toJS())
	// 	socket.on('action',store.dispatch.bind(store))
	// })
	return 0;
}
