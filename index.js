var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {

	console.log('--------------------------------');
	console.log('authorization', atob(req.get("authorization")));
	console.log('x-forwarded-proto', req.get('x-forwarded-proto'));
	console.log('x-forwarded-for', req.get('x-forwarded-for'));
	console.log('x-forwarded-port', req.get('x-forwarded-port'));
	console.log('params', req.params);
	console.log('query', req.query);
	console.log('--------------------------------');
	
	res.send('OK');
});

// Heroku
app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});