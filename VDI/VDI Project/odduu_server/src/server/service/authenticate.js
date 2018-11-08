var User = require('../models/User').User;
var Client = require('../models/Client').Client;

/**
 * @function login 
 * @param {String} userId 
 * @param {String} password 
 * @description Check User by user id and password from mongoDB.
 */
function login(userId, password) {
  return new Promise(function(resolve, reject) {
    User.findOne({userId : userId, password:password}).then(function(result) {
      resolve(result)
    }).catch(function(err) {
      reject(err)
    })

  })
}

export const authSocket = (client) => {
  return new Promise(function(resolve, reject) {
    if(client.clientId != undefined && client.clientName != undefined) {
      Client.findOne({_id : client.clientId, orgName: client.clientName})
      .then(function(result) {
        resolve(result);
      })
      .catch(function(err) {
        reject(err)
      })
    }else {
      reject('Client Obj is not formatted or invalid')
    }
  })
}

//Export login
/**
 * @function login
 * @description API "/login" will invoke this function
 */
exports.login = login;
