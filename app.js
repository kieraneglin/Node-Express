var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'jade');

app.locals.pagetitle = "This is globally availible to views";

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function(req, res){
  res.send('Bad route');
});

var server = app.listen(3000, function(){
  console.log('Listening on port 3000');
});
