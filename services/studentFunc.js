exports.tap = function tap(sid, sessionId){
  Session.findOne( {'sessionId': sessionId}, function(err, session){
    if (err) {
      console.log(err)
    }
    else if (session != null){//&& session.idList.indexOf(sid) != -1) {
      var event = {
        id: sid,
        time: new Date()
      }

      session.events.push(event)

      session.save(function(err) {
        if (err)
          console.log(err)
        else {

        }
      })
    }
    else{
      console.log('unauthorized')
    }
  })
}

exports.join = function add(sid, sessionId){
  var student = { id: sid }
  Session.findOne( { 'sessionId': sessionId }, function(err, session){
    if (err) {
      console.log(err)
    }
    else {
      session.participants.push(student)
      
      session.save(function(err) {
        if (err)
          console.log(err)
        else {

        }
      })
    }
  })
}