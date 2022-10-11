var express = require('express');
var router = express.Router();
var UserModel = require("./bdd");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

///           [ CONNECTION, user reconized + dashboard access ]            ///
router.post('/signIn', function(req, res, next) {
  console.log( "Data's form :: ", req.body );
  res.render('weather', { title: 'Express' });
});

///           [ INSCRIPTION, user added to BDD + dashboard access ]            ///
router.post('/signUp', function(req, res, next) {
  res.render('/weather.html', { title: 'Express' });
});


module.exports = router;
