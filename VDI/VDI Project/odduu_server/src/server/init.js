const _path = require('./path');
const mongoose = require('mongoose');
var path = require('path');



mongoose.connect(_path.db_path, { useMongoClient: true,  } );

exports.mongoose = mongoose;
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection is Open' );
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// When the connection is open
mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');

  // Initialize Data u - admin , p - 123
    var User = require('./models/User').User;
      User.findOne({userId: 'admin'}, function(err, user) {
        if(user){

        }else{
          var admin = new User({
            name: 'Super Admin',
            userId: 'admin',
            password: '123',
            createdDate: new Date().getTime()
          })
          admin.save(function(err,admin) {
            if(err) {
              console.error('Admin not saved ');
            }
          })
        }
      })
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
