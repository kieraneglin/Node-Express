exports.index = function(req, res){
  res.render('default', {
    title: 'Home',
    classname: 'home',
    users: ['Kieran', 'Eglin', 'Hello']
  });
};
exports.about = function(req, res){
  res.render('default', {
    title: 'About',
    classname: 'about'
  });
};
