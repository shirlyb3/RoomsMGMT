var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var browserify = require('browserify');
var fs = require("fs");
mongoose.Promise = require('q').Promise;

var app = express();

var b = browserify(__dirname + "/scripts/LoginBox.js")
	.transform("babelify", {presets: ["es2015","react"]})
	.bundle()
	.pipe(fs.createWriteStream(__dirname + "/scripts/bundle.js"));;
b.on('error',console.error);

app.use('/scripts', express.static('scripts'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/RoomsMGMT');
var db = mongoose.connection;
db.once('open', function () {
	console.log("The DB is conected");
});

var userSchema = mongoose.Schema({
		userId: {type: String, unique: true},
		password: String,
		name: String,
		type: String,
		email: String
	});

var User = mongoose.model('User', userSchema);

app.get('/', function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
})

app.get('/userTypes', function (req, res) {
	res.send([{key: 'admin',
				value: 'Admin'},
			{key: 'customer',
				value: 'Customer'}]);
})

app.post('/newUser', function (req, res) {
	user = new User(req.body);
	user.save()
	.then(function () {
		console.log("All Good");
		res.status(200);
		res.send("All good");
	},
	function (err) {
		console.log(err);
		res.status(420);
		res.send(err);
	})
});

app.listen(8889, function () {
	console.log("listening in port 8889 ^_^");
})