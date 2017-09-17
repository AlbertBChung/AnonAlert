var mongoose = require('mongoose')

var sessionSchema = new mongoose.Schema({
  sessionId: { type: String, unique: true, required: true },
  idList: [{ 
  	_id: false,
  	id: String
  }],
  idCount: {type: Number},
  startTime: { type: Date },
  duration: { type: Number },
  events: [{ 
  	_id: false,
  	id: String,
  	time: Date   
  }],
  owner: {type: String},
  classId: {type: String}
})

module.exports = mongoose.model('Session', sessionSchema );
