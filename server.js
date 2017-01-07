var express = require('express'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.listen(7000);
console.log('server listening on port 7000');