
export default class ClientCommunication {
  constructor(socket) {
    this.socket=socket;
    
  }
  sendBulkInstallCMD(obj){
    console.log('in sendBulkInstallCMD ',obj)
    this.socket.emit('bulkInstall',obj)
  }
  sendBulkUninstallCmd(obj){
    console.log('in sendBulkUninstallCmd ',obj)
    this.socket.emit('bulkUnInstall',obj);
  }
}
