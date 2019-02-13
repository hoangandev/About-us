var express = require('express');
var app = express();

var aboutRoute = require('./routes/about.route');

var port = 3000

var bodyParser = require('body-parser');


app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));



app.get('/', function (req, res) {
	res.render('index');
	
});


app.use('/about', aboutRoute);

app.listen(port, function() {
	console.log('Server listening on port ' + port);
});
