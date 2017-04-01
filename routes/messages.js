const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

router.post('/addMessage', (req, res, next) => {
  console.log(req.body);
  let newMessage = new Message({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  });

  Message.addMessage(newMessage, (err, message) => {
    if(err){
      res.json({success: false, msg: 'Failed to send message'});
    }else{
      res.json({success: true, msg: 'Message sent!'});
    }
  });
});

router.get('/messages', (req, res, next) => {
  Message.getMessages({}, (err, messages) => {
    if(err) throw err;
    res.json(messages);
  });
});


router.delete('/:messageID', (req, res, next) => {
  const messageID = req.params.messageID;
  Message.deleteMessage(messageID, (err) => {
    if (err){
      res.json({success: false, msg: 'Failed to delete Mmessage'});
    }else{
      res.json({success: true, msg: 'Deleted message'});
    }
  });
});
module.exports = router;
