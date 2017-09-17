var express = require('express')
var router = express.Router()
var Session = require('../models/session')
var Class = require('../models/class')
var User = require('../models/user') //
var authController = require('../controllers/auth')

router.post('/', authController.isAuthenticated, function(req, res) {
  Session.findOne( { name: req.body.sessionId, owner: req.user.username, classId: req.body.classId }, function(err, sess){
    if(sess == null){ //check for uniqueness.

      Class.findOne( { owner: req.user.username, classId: req.body.classId }, function(err, course){
        if(course != null){ //check for existance of class.

          var session = new Session()

          session.sessionId = req.body.sessionId
          session.startTime = new Date()
          session.duration = 0
          session.events = []
          session.owner = req.user.username
          session.idList = course.idList
          session.idCount = course.idList.length
          session.classId = req.body.classId

          course.sessions.push(session)

          session.save(function(err) {
            if (err)
              res.status(500).send(err)
            else {
              course.save(function(err){
                if(err)
                  res.status(500).send(err)
                else{
                  res.json({ message: 'Session created!', data: session })  
                }
              })
            }
          })

        }
      })
    }
  })
})


router.get('/:sessionId', authController.isAuthenticated, function(req, res){
  Session.findOne( {'sessionId': req.params.sessionId, owner: req.user.username },function(err, session){
    if (err) {
      res.status(500).send(err)
    }
    else if(session != null){
      res.json(session)
    }
    else {
      res.json('unauthorized')
    }
  })
})

router.get('id/:_id', authController.isAuthenticated, function(req, res){
  Session.findById(req.params._id, function (err, session) {
    if (err) {
      res.status(500).send(err)
    }
    else if(session != null && session.owner == req.user.username){
      res.json(session)
    }
    else {
      res.json('unauthorized')
    }
  })
})

router.post('/clear', function(req, res){
  tap(req.body.id, req.body.sessionId)
})




module.exports = router