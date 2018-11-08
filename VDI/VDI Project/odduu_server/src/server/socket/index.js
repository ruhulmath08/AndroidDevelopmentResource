var auth = require('socketio-auth');
import {encrypterFun, decrypterFun} from '../helper/encrypter';
import {authSocket} from '../service/authenticate';
import * as constants from '../../App/stores/constants';
var latestClient = '';
var connectedClients = [];
export const startSocket = (port)=>{
  var io = require('socket.io').listen(port);
  require('socketio-auth')(io, {
    authenticate: (socket, data, callback) => {
      var decryptedData = decrypterFun(data.token);
      if(decryptedData != false) {
        authSocket(decryptedData).then(function(result) {
          if(result != undefined) {
            latestClient = result;
            callback(null, true);
          }else {
            callback(null, false);
          }
        })
      }else {
        callback(null, false)
      }
    },
    postAuthenticate: (socket, data) => {
      connectedClient(socket, data);
    },
    disconnect: (socket) => {
      console.log(socket.id, ' is Disconnected');
    }
  })
}

function connectedClient(socket, data) {
  console.log('Post authenticate ', socket.id );
  var decryptedData = decrypterFun(data.token);
  connectedClients.push({
    clientId: decryptedData.clientId,
    clientName: decryptedData.clientName,
    socket: socket
  })
  if(decryptedData != false) {
    console.log(latestClient,'-------- latestClient');
    socket.emit(constants.LICENSE_INFO, encrypterFun({
      licenseQty: latestClient.licenseQty
    }))
  }
}

exports.connectedClients = connectedClients;
