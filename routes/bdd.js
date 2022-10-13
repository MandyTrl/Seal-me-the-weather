const mongoose = require('mongoose'); ///Import du module Mongoose qui va permettre de faire la liaison entre le backend et la BDD

///           [ OPTIONS DE CONNEXION ]            ///
const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology : true
 }

///           [ CONNEXION BDD ]            ///
 mongoose.connect("mongodb+srv://MandyTrl:Demacia.78@personnalprojects.9nowbrs.mongodb.net/?retryWrites=true&w=majority", {dbName: "SealMyWeather"},
    options,        
    function(err) {
     console.log(err);
    }
 );


///           [ SCHEMAS ]            ///
let userSchema = mongoose.Schema({
   username: String,
   email: String,
   password: String,
   location: String,
});
let userModel = mongoose.model('users', userSchema);

module.exports = userModel;