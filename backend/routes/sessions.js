var express = require('express')
var router = express.Router()
var Session = require('../models/session')

router.post('/', function(req, res) {

  var session = new Session();

  session.id = req.body.id
  session.participants = []

  session.save(function(err) {
    if (err)
      res.send(err);
    else {
      res.json({ message: 'Session created!', data: session });
    }
  });

});

router.get('/:id', function(req, res){
  Session.findOne( {'id': req.params.id},function(err, session){
    if (err) {
      res.send(err);
    }
    else {
      res.json(session);
    }
  })
})



module.exports = router