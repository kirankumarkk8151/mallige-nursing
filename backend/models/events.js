const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  month: String,
  year: Number,

});

module.exports = mongoose.model('Event', eventSchema);
