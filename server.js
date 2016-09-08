var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.Promise = require('q').Promise;

var app = express();

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
	console.log(req.body);
	//res.send("OK");
	user = new User(req.body);
	console.log(user);
	/*user.save()
	.then(function () {
		res.status(200);
		res.send("All good");
	}, failCallbacks)*/
});

app.listen(8889, function () {
	console.log("listening in port 8889 ^_^");
})