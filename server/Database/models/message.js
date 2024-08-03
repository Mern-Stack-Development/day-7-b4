const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
}, { collection: 'customMessages' });

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
