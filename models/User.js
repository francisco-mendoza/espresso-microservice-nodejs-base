var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  last_name: String,
  rut: String,
  email: String,
  password: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');