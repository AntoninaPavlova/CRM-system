const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: String,
  description: String,
  number: String,
  head: String,
});

module.exports = mongoose.model('Department', departmentSchema);
