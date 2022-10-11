var mongoose = require('mongoose'); ///Import du module Mongoose qui va permettre de faire la liaison entre le backend et la BDD

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology : true
 }
 
 mongoose.connect("mongodb+srv://MandyTrl:Demacia.78@personnalprojects.9nowbrs.mongodb.net/?retryWrites=true&w=majority",
    options,        
    function(err) {
     console.log(err);
    }
 );

 ///           [ SCHEMAS ]            ///
 var userSchema = mongoose.Schema({
   username: String,
   email: String,
   password: String,
   location: String,
});
var UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;