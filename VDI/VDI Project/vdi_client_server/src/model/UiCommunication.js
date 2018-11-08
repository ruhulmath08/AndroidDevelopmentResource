import mori from 'mori';
export default class UiCommunication {
  constructor(socket) {
    this.socket=socket;
  }
  sendUpdatedState(store){
    
    this.socket.emit('initialData',mori.toJs(store.getState()))
  }
}
