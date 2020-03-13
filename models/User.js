var mongoose = require('mongoose');
const connectToDb = require('../libs/db/connect');

var UserSchema = new mongoose.Schema({  
  name:      { type: String },
  last_name: { type: String },
  rut:       { type: String },
  email:     { type: String },
  password:  { type: String }
});

let UserModel = mongoose.model('User', UserSchema);

//connectToDb();

UserModel.getAll = () => {
  return UserModel.find({});
}

UserModel.addUser = (user) => {
  return UserModel.save(user);
}

UserModel.detailUser = (user) => {
  return UserModel.findById(user);
}

UserModel.removeUser = (user) => {
  return UserModel.findByIdAndRemove(user);
}

UserModel.updateUser = (id, body) => {
  return UserModel.findByIdAndUpdate(id, body, {new: true}, callback);
}

module.exports = mongoose.model('User');