var router = require('express').Router();
var clientList = require('./removeClient').removeClient;
var tokenGenerate = require('./tokenGenerate').tokenGenerate;
var removeClient = require('./removeClient').removeClient;
var addLicense = require('./addLicense').addLicense;

/**
 * @event removeClient
 * @description Remove the client license and client from server.
 */
router.use('/removeClient', removeClient );
/**
 * @event /tokenGenerate
 * @description Generate token for a client
 */
router.use('/tokenGenerate', tokenGenerate);
/**
 * @event /addLicense
 * @description Update a client license info. Only increase is supported now.
 */
router.use('/addLicense', addLicense);
/**
 * @function dashboard
 * @returns router
 */
exports.dashboard = router;
