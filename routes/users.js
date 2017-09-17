var express = require('express')
var router = express.Router()
var User = require('../models/user')
var authController = require('../controllers/auth')

router.post('/', function(req, res) {
  var user = new User()

  user.username = req.body.username	
  user.lastName = req.body.lastName
  user.firstName = req.body.firstName
  user.password = req.body.password
  user.classes = [];

  user.save(function(err) {
    if (err)
      res.send(err)
    else {
      res.json({ message: 'User created!', data: user })
    }
  });

});


router.get('/', authController.isAuthenticated, function(req, res){
  User.findOne( {'username': req.user.username},function(err, user){
    if (err) {
      res.send(err)
    }
    else {
      res.json(user)
    }
  })
})





module.exports = router