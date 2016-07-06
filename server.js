var express = require('express');
var path = require('path');

var app = express();
var port = 3000;

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port, function onServerListen(){
  console.log('Started express server on port ' + port);
  console.log('Press Ctrl + C to stop');
});
