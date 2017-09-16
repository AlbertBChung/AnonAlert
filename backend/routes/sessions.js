var express = require('express')
var router = express.Router()
var Session = require('../models/session')

router.post('/', function(req, res) {
  var session = new Session()

  session.sessionId = req.body.sessionId
  session.participants = []
  session.startTime = new Date()
  session.duration = 0
  session.events = []

  session.save(function(err) {
    if (err)
      res.send(err)
    else {
      res.json({ message: 'Session created!', data: session })
    }
  });

});

router.get('/:sessionId', function(req, res){
  Session.findOne( {'sessionId': req.params.sessionId},function(err, session){
    if (err) {
      res.send(err)
    }
    else {
      res.json(session)
    }
  })
})

router.get('/', function(req, res){
  //Session.collection.drop();
  Session.find({}, function(err, sessions){
    if (err) {
      res.send(err)
    }
    else {
      res.json(sessions)
    }
  })
})


router.post('/add', function(req, res) {

  var student = { id: req.body.id }
  Session.findOne( { 'sessionId': req.body.sessionId }, function(err, session){
    if (err) {
      res.send(err)
    }
    else {
      session.participants.push(student)
      
      session.save(function(err) {
        if (err)
          res.send(err)
        else {
          res.json({ message: 'Session updated!', data: session });
        }
      });
    }
  })

});


router.post('/tap', function(req, res) {

  Session.findOne( {'sessionId': req.body.sessionId},function(err, session){
    if (err) {
      res.send(err)
    }
    else {
      var event = {
        id: req.body.id,
        time: new Date()
      }

      session.events.push(event)


      session.save(function(err) {
        if (err)
          res.send(err)
        else {
          res.json({ message: 'Session updated!', data: session });
        }
      });
    }
  })

});


module.exports = router