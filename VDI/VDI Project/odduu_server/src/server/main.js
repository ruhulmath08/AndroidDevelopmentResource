/**
 * @author Rakin Afser
 * @fileOverview Client Entry Point
 */
const express = require('express');
var app = express();
const _ = require('lodash');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken')
var cors = require('cors');
var passport = require('passport');
var passportJWT = require('passport-jwt');

const dashboard = require('./routes/dashboard').dashboard;
//import mori data structure
const { hashMap, assoc, get, toJs , toClj } = require('mori');

// Import login function
var login = require('./service/authenticate').login;

var intoMap = require('././helper/assignMap').intoMap;

var clientList = require('./routes/dashboard/clientList').clientList;
//Import Store [Redux]
// const configureStore = require('../config/store')
import configureStore from '../config/store';
var store = configureStore({}, 'server', undefined);

// Export store to testing
exports.store = store;

// Import socket port
import {SOCKET_PORT} from '../App/stores/constants';

//import startSocket function
import {startSocket} from './socket';

const JWTstrategy = passportJWT.Strategy ;
const extractJWT = passportJWT.ExtractJwt ;

var jwtOptions = {};
jwtOptions.jwtFromRequest = extractJWT.fromAuthHeader();
jwtOptions.secretOrKey = 'odduu-vdi-license';

// Users array
var users = {};

var strategy = new JWTstrategy(jwtOptions, function(jwt_payload, next) {
  console.log( ' Payload received  - ', jwt_payload);
  //extract object from token and then find id/userid from user array

  // var user = users[_.findIndex(users,{id:jwt_payload.id})]
  var user = users[jwt_payload.id] || undefined
  //console.log(' User  -- ' ,  user);

  // get data by id - mori structure
  if(user) {
    next(null, user)
  } else {
    next(null, false)
  }
})


app.use(cors(({credentials: true, origin: true})))

passport.use(strategy);
app.use(passport.initialize());
app.use(bodyParser.urlencoded({
  extended : true
}))
app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.json( {msg : 'Triggered ! '})
})


app.use('/dashboard', passport.authenticate('jwt', { session: false }), dashboard );

/**
 * @event /login
 * @description Authenticate User before access dashboard
 */
app.post('/login', function(req,res) {

  if(req.body.userId && req.body.password){
    var userId = req.body.userId;
    var password = req.body.password;
  }

  login(userId, password).then(function(result) {

    if( result == null  ){
      console.log('-------- ', result);
      res.status(401).json({message:"no such user found "});
    }

    if(result != null) {
      // Put the user into

      users = intoMap(users, result)
      console.log(users);
      // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
      var payload = {id: result._id,
      user : result};
      var token = jwt.sign(payload, jwtOptions.secretOrKey);

      clientList().then(function(clientList) {
        res.json({message: "ok", token: token, user : result, clientList: clientList});
      })
      //res.send(user)
    }
  })


})

// Test API
app.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
  res.json("Success! You can not see this without a token");
});




app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
startSocket(SOCKET_PORT);

// Debugging why async keyword does not works
// async function getUser(userId, password) {
//   var user = await login(userId, password)
//   return user;
// }

/**
 * @constructor Test
 * @returns {string} name
 */
function test() {

}