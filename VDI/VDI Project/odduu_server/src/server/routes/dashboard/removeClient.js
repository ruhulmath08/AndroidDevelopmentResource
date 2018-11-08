var router = require('express').Router();
var Client = require('../../models/Client').Client;
var clientList = require('./clientList').clientList;
var connectedClients = require('../../socket').connectedClients;
import * as constants from '../../../App/stores/constants';
import {encrypterFun} from '../../helper/encrypter';

router.post('/', function(req, res) {
    Client.findByIdAndRemove(req.body.id,(err, client)=> {
      if(err) {
        console.error('Error in removeClient -> ', err);
        return ''
      }
      var updatedClient = {};
      connectedClients.forEach(function(item, index) {
        if(item.clientId == req.body.id) {
          updatedClient['socket'] = item.socket;
          updatedClient['name'] = item.clientName
        }
      })
      updatedClient.socket.emit(constants.LICENSE_INFO, encrypterFun({
        licenseQty: []
      }))

      clientList().then(function(result) {
        res.json({
          message: 'ok',
          clientList: result,
          removed: client
        })
      })
    })
  }
)

exports.removeClient = router
