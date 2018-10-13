const mongoose = require('mongoose');
//const config = require('../config/database.js');

//Setup user schema
const MessageSchema = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    Created_at:  { type: Date, default: Date.now }
});

MessageSchema.pre('save', function(next){
  var currentDate = new Date();
  this.created_at = currentDate;
  next();
});

const Message = mongoose.model('Message', MessageSchema);
//Exports our Store model
module.exports = Message;

// Encapsulate the DB functions inside of users model
module.exports.getMessage = (messageId, callback) => {
  const messageIdJSON = {id : messageId};
  Message.findOne(messageIdJSON, callback);
};

module.exports.getMessages = (queryString, callback) => {
  Message.find(queryString, callback);
};

module.exports.addMessage = (newMessage, callback) => {
  newMessage.save(callback);
};

module.exports.deleteMessage = (messageId, callback) => {
  const messageIdJSON = {_id : messageId};
  Message.remove(messageIdJSON, callback);
};
