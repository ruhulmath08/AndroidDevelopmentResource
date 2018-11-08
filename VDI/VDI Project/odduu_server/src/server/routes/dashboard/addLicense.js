var router = require('express').Router();
var Client = require('../../models/Client').Client;
var clientList = require('./clientList').clientList;
var connectedClients = require('../../socket').connectedClients;
import * as constants from '../../../App/stores/constants';
import {encrypterFun} from '../../helper/encrypter';

router.post('/', function(req, res) {
  var id = req.body.id || '',
  qty = req.body.qty || 0,
  expDate = req.body.expDate || new Date().getTime()

  Client.findByIdAndUpdate(
    id,
    {$push: {'licenseQty': {
      expDate: expDate,
      startedDate: new Date().getTime(),
      qty: qty
    }}},
    {safe: true, upsert: true, new: true},
    function(err, clientModel) {
      if(err) {
        console.error('Error in addLicense File -> ', err);
        res.json({
          message: false
        })
        return
      }

      clientList().then(function(result) {
        var updatedClient = {};
        connectedClients.forEach(function(item, index) {
          if(item.clientId == id) {
            updatedClient['socket'] = item.socket;
            updatedClient['name'] = item.clientName
          }
        })
        result.forEach(function(item, index) {
          if(item._id == id) {
            updatedClient.socket.emit(constants.LICENSE_INFO, encrypterFun({
              licenseQty: item.licenseQty
            }))
          }
        })
        res.json({
            message: 'ok',
            clientList: result
          })
      })
    }

  )
})

exports.addLicense = router;
