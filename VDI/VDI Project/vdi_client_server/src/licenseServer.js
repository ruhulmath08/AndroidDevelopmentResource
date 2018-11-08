import io from 'socket.io-client';
import * as _path from './path';
import {decrypterFun, encrypterFun} from './service/parserHax';
import * as _init from './init';
import * as actions from './redux/actions';
import {countLicense, hostnameVSlicenseQty} from './helper/licenseHelper';
import {get, toJs} from 'mori';
export let licenseServer = (path, token, uiSocket, store)=> {
    var socket = io.connect(path);
    socket.on('connect', function() {
    socket.emit('authentication', {token: token});
    socket.on('authenticated', function() {
      console.log('Authenticated CLient');
      if(uiSocket != undefined) {
        uiSocket.emit(_path.SUBMIT_TOKEN_REPLY, {result: true})
      }
    });
    socket.on('unauthorized', function(err){
      console.error("There was an error with the authentication:", err.message);
    });
    socket.on(_path.LICENSE_INFO, function(obj) {
      var decryptedData = decrypterFun(obj);
      _init.setRedis(_path.DB_LICENSE_LIST, JSON.stringify(decryptedData));
      if(decryptedData.licenseQty.length >= 0) {
        var qty = countLicense(decryptedData.licenseQty);
        _init.setRedis(_path.LICENSE_QTY, qty);
        hostnameVSlicenseQty(qty).then(function(response) {

          var entries = get(store.getState(), 'entries')

          if(response.exceedHost != undefined && response.exceedHost.length > 0) {
            uiSocket.emit('CLIENT_REMOVED', JSON.stringify(response));
            response.exceedHost.forEach(function(host, index) {
              var lab = host.split(/[-cl | pc]+/)[1];
              var pc = host.split(/[-cl | pc]+/)[2];
              var removedClient= toJs(entries).filter(function(item, index) {
                var newLab = Object.values(item)[0]['lab']
                var newPC = Object.values(item)[0]['pc']
                return lab == newLab && pc == newPC
              })
              var mac = Object.keys(removedClient[0])[0]
              store.dispatch(actions.removeClient({mac:mac}))

            })
          }
          //store.dispatch() remove clients from store
        })

      }
      store.dispatch({
        type: _path.LICENSE_INFO_ACTION,
        payload: decryptedData
      })

    })
  })
}
