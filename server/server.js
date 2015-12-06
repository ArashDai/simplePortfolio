var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('client'));

app.get('*', function (request, response){
  response.sendFile(path.resolve('client', 'index.html'))
})


app.listen(3000);
