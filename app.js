var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('default', {title: 'Home'});
});
app.get('/me', function(req, res){
  res.send('Its me!');
});
app.get('/who/:name?', function(req, res){
  var name = req.params.name;
  res.send(name + ' wuz here');
});
app.get('/who/:name?/:title?', function(req, res){
  var name = req.params.name;
  var title = req.params.title;
  res.send(name + ' wuz here' + title);
});
app.get('*', function(req, res){
  res.send('Bad route');
});

var server = app.listen(3000, function(){
  console.log('Listening on port 3000');
});
