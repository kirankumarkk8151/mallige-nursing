const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  subject: String,
  message: String,

});

module.exports = mongoose.model('Contact', contactSchema);
