const express = require('express');
const router = express.Router();
const userModel = require("./bdd");
//request : infos envoyées par le user, response : renvoie l'info au user //
///           [ GET LOGIN PAGE ]            ///
router.get('/', function(req, res, next) {
  res.render('home');
});

// ///           [ GET HOME PAGE ]            ///
// router.get('/home', function(req, res, next) {
//   res.render('weather');
// });


///           [ CONNECTION, user reconized + dashboard access ]            ///
router.post('/signin', async function(req, res, next) {
  let emailFront = req.body.email;
  let passwordFront = req.body.password;
  let user = await userModel.find( { email: emailFront } ); //Récupère tous les documents dont l'email correspond à celui saisi dans le formulaire
  console.log("user = ", user);

  res.render('weather', { user: user });
});

///           [ INSCRIPTION, user added to BDD + dashboard access ]            ///
router.post('/signup', async function(req, res, next) {
  console.log("data = ", req.body);
  let newUser = new userModel ({
    username: req.body.username,
    email: req.body.email,
    password:  req.body.password,
    location: req.body.location
    }); //Création d'un nouvel user en fonction du userModel
  let userSaved = await newUser.save(); //User enregistré en BDD grace à la méthode "save"
  console.log("user saved = ", userSaved);
  res.render('weather', { title: 'Express' });
});


module.exports = router;
