var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  title :{
    type : String,
    required : true
  },
  body :{
    type : String,
    required : true
  },
  comments :{
    type : String
  }
});

module.exports = mongoose.model('Data',UserSchema);
