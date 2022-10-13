const express = require('express');
const router = express.Router();
const userModel = require("./bdd");
let error = []; //Permet de push n'importe quel msg d'erreur

//request : infos envoyées par le user, response : renvoie l'info au user //
///           [ GET LOGIN PAGE ]            ///
router.get('/', function(req, res, next) {
  res.render('home');
});

///           [ CONNECTION, user reconized + dashboard access ]            ///
router.post('/signin', async function(req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  let user = await userModel.find( { email: email, password: password } ); //Récupère tous les documents dont l'email et le mdp correspondent à ceux saisis dans le formulaire
  console.log(user.username)
  if (user){
    res.render('weather', { username : `${user.username}` } );
    // res.json( { username : user.username } );
  }
  else {
    error.push("Il semblerait que vos informations soient incorrects ou qu'aucun compte n'ai été créé")
    res.render('home', { error });
  }
});

///           [ INSCRIPTION, user added to BDD + dashboard access ]            ///
router.post('/signup', async function(req, res, next) {
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
