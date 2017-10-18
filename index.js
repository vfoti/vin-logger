const express = require('express');
const app = express();

//app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
	console.log(req);
});

/*
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
*/

//app.listen(process.env.PORT, process.env.IP); // Cloud 9
app.listen(app.get('port')); // Heroku