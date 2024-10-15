const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  department: String,
  technologies: [String],
});

module.exports = mongoose.model('Staff', staffSchema);
