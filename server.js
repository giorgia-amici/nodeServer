var express = require('express');
var app = express();
var server = require('http').createServer(app);


app.get('/', function(req, res){
	res.send("Hello")
});

server.listen(3000, function(){
	console.log('server listening on port 3000');
});

module.export = server;
