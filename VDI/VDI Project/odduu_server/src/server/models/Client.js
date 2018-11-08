var mongoose = require('../init').mongoose;
var Schema = mongoose.Schema;
/**
 * @class Client - Creating a Client Schema for MongoDB data manupulation. A schema represent a Object data structure. 
 */
var clientSchema = new Schema({
  orgName: { type: String, required : true, unique : true, dropDups: true },
  contactName: {type: String, required: true},
  contactCell: {type: String, default: '01700-000000'},
  contactEmail: {type: String, default: null},
  licenseQty: {type: [{
    expDate: Date,
    startedDate: Date,
    qty: Number
  }], required: true}
})

exports.Client = mongoose.model('Client', clientSchema);
