var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.locals.pagetitle = "awesome stuff";

app.get('/', function(req, res){
  res.render('default', {
    title: 'Home',
    classname: 'home',
    users: ['Kieran', 'Eglin', 'Hello']
  });
});
app.get('/about', function(req, res){
  res.render('default', {
    title: 'About',
    classname: 'about'
  });
});
app.get('*', function(req, res){
  res.send('Bad route');
});

var server = app.listen(3000, function(){
  console.log('Listening on port 3000');
});
