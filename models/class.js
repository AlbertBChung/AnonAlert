var mongoose = require('mongoose')

var classSchema = new mongoose.Schema({
  classId: {type: String, required: true},
  sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }],
  idList: [String],
  owner: {type: String}
})

module.exports = mongoose.model('Class', classSchema );
