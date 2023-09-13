const mongoose = require('mongoose');

const announcmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  month: String,
  year: Number,
  date: Number,
  startTime: String,
  endTime: String,
  image: String
});

module.exports = mongoose.model('Announcment', announcmentSchema);
