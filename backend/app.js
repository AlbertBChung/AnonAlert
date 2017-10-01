require('dotenv').config()
var express = require('express')
var mongoose = require('mongoose')
var passport = require('passport')
var cors = require('cors')
var student = require('./services/studentFunc')
var app = express()


var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
connections = []
io.sockets.on('connection', function(socket){
	connections.push(socket)
	console.log('connected %s', connections.length)
	socket.on('onTap',function(data){
		console.log('tap')
		student.tap(data.sid, data.sessionId);
	})
	socket.on('onJoin',function(data){
		console.log('join')
		student.join(data.sid, data.sessionId);
	})
	socket.on('disconnect',function(data){
		connections.splice(connections.indexOf(socket), 1)
		console.log('connected %s', connections.length)
	})
})


var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(passport.initialize());

mongoose.connect(process.env.MONGODB_URI);
app.use(cors())


app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index')
});

var router = express.Router()
router.get('/', function (req, res) {
  res.json({ message: 'API' })
})

router.use('/sessions', require('./routes/sessions.js'))
router.use('/users', require('./routes/users.js'))
router.use('/classes', require('./routes/classes.js'))

app.use('/api', router)


server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
