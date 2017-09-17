var express = require('express')
var router = express.Router()
var Class = require('../models/class')
var authController = require('../controllers/auth')

router.post('/', authController.isAuthenticated, function(req, res) {
  Class.findOne( { classId: req.body.classId, owner: req.user.username }, function(err, cours){
    if(cours == null){ //check for uniqueness

      var course = new Class()

      course.classId = req.body.classId
      course.sessions = []
      course.idList = req.body.idList
      course.events = []
      course.owner = req.user.username
      

      req.user.classes.push(course)

      course.save(function(err) {
        if (err)
          res.status(500).send(err)
        else {
          req.user.save(function(err){
            if(err)
              res.status(500).send(err)
            else{
              res.json({ message: 'Class created!', data: course })
            }
          })
        }
      })
    }
    else{
      res.json({ message: 'Class already Exists' })
    }
  })
})

router.get('/:classId', authController.isAuthenticated, function(req, res){
  Class.findOne( { classId: req.params.classId, owner: req.user.username },function(err, course){
    if (err) {
      res.status(500).send(err)
    }
    else if(course != null){
      res.json(course)
    }
    else{
      res.json('unauthorized')
    }
  })
})

router.get('id/:_id', authController.isAuthenticated, function(req, res){
  Class.findById(req.params._id, function (err, course) {
    if (err) {
      res.status(500).send(err)
    }
    else if(course != null && course.owner == req.user.username){
      res.json(course)
    }
    else {
      res.json('unauthorized')
    }
  })
})

module.exports = router