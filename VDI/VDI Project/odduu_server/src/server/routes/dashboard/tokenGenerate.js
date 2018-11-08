var router = require('express').Router();
var Client = require('../../models/Client').Client;
var clientList = require('./clientList').clientList;

router.post('/', function(req, res) {

  var client = new Client({
    orgName: req.body.orgName || '',
    contactName: req.body.contactName || '',
    contactCell: req.body.contactCell || '',
    contactEmail: req.body.contactEmail || '',
    licenseQty: [{
      expDate: new Date(req.body.expDate).getTime() || new Date(),
      startedDate: new Date().getTime(),
      qty: req.body.licenseQty
    }]
  })
  client.save(function(err) {
    if(err) {
      console.error('Client save error -> ORG ', req.body.orgName);
      res.json({
        message: false
      })
    } else{
        clientList().then(function(result) {
          res.json({
              message: 'ok',
              clientList: result
            })
      })
    }

  })

})

exports.tokenGenerate = router;
