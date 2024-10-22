const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  department: String,
  technologies: [String],
});

module.exports = mongoose.model('Employee', employeeSchema);
