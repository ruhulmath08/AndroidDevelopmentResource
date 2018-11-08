var mongoose = require('../init').mongoose;
var Schema = mongoose.Schema;

/**
 * @class user - Creating a User Schema for MongoDB data manupulation. A schema represent a Object data structure. 
 */
var userSchema = new Schema({
  name : String,
  userId : { type: String, required : true, unique : true },
  password: { type : String, required : true },
  createdDate: Date

})

// Model USER exports
exports.User = mongoose.model('User', userSchema);
