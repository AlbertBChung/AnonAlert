require('dotenv').config()
var express = require('express')
var mongoose = require('mongoose')
var cors = require('cors')


var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



//mongoose.connect(process.env.MONGODB_URI);
app.use(cors())


app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.json({message: 'API'})
});

var router = express.Router()
router.get('/', function (req, res) {
  res.json({ message: 'API' })
})
router.use('/users', require('./routes/users.js'))

app.use('/api', router)


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
