const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database.js');

//Setup user schema
const UserSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

const User = mongoose.model('User', UserSchema);
//Exports our User model
module.exports = User;

// Encapsulate the DB functions inside of users model
module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
};

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username};
  User.findOne(query, callback);
};

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.comparePassword = function(password, hashedPassword, callback){
  bcrypt.compare(password, hashedPassword, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};

// Dependancy injection + closures + currying
/*
  Dependancy Injection - Injecting the connection dependency from externally
  Closures - The function that is being returned has access to its parent scopes variables which is (connection)
  Currying - THe function takes one argument now and another later. You are returning a function until you have all the parameters to return the end result
*/
// const makeCreateUser = connection => query =>
//     connection.table('users').insert({
//       full_name: name
//     })
//     .then(user => user.id)