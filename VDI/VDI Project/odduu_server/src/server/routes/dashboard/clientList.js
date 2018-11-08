var Client = require('../../models/Client').Client;
import {encrypterFun} from '../../helper/encrypter';
import {SERVER_SOCKET} from '../../../App/stores/constants';

/**
 * @function clientList
 * @description Read all clients info from MongoDB Client Schema and return it.
 * @returns [Client]
 */
export function clientList() {
  return new Promise(function(resolve, reject) {
    Client.find(function(err, clients) {
      if(err) {
        return reject(' Error -> in clientList data fetching promise ')
      }
      var modifiedClient = clients.reduce(function(arr, client, index) {
        var obj = {
          odduu_server : SERVER_SOCKET,
          clientId : client._id,
          clientName : client.orgName
        }
        arr.push(Object.assign(JSON.parse(JSON.stringify(client)), {token: encrypterFun(obj)}))
        return arr
      },[])
      resolve(modifiedClient)
    })
  })
}


// var router = require('express').Router();
//var Client = require('../../models/Client').Client;
//
// router.get('/', function(req, res) {
//
//   res.json({
//     message: 'ok',
//     data:[1,2,3]
//   })
// })
//
// exports.clientList = router;
