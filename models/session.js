var mongoose = require('mongoose')

var sessionSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  participants: [{ id: String }]
})

module.exports = mongoose.model('Session', sessionSchema );