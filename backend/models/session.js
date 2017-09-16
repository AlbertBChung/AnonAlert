var mongoose = require('mongoose')

var sessionSchema = new mongoose.Schema({
  sessionId: { type: String, unique: true, required: true },
  participants: [{ 
  	_id: false,
  	id: String
  }],
  startTime: { type: Date },
  duration: { type: Number },
  events: [{ 
  	_id: false,
  	id: String,
  	time: Date   
  }],
  owner: {type: String}
})

module.exports = mongoose.model('Session', sessionSchema );
