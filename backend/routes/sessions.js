var express = require('express')
var router = express.Router()
var Session = require('../models/session')
var authController = require('../controllers/auth')

router.post('/', authController.isAuthenticated, function(req, res) {
  var session = new Session()

  session.sessionId = req.body.sessionId
  session.participants = []
  session.startTime = new Date()
  session.duration = 0
  session.events = []
  session.owner = req.user.username

  req.user.sessions.push(session)

  session.save(function(err) {
    if (err)
      res.send(err)
    else {
      res.json({ message: 'Session created!', data: session })
    }
  });

});

router.get('/:sessionId', authController.isAuthenticated, function(req, res){
  Session.findOne( {'sessionId': req.params.sessionId},function(err, session){
    if (err) {
      res.send(err)
    }
    else if(session.owner == req.user.username){
      res.json(session)
    }
    else {
      res.json('unauthorized')
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