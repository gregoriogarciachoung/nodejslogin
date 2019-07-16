var mongoose = require('mongoose');
//creando el esquema de usuarios
var tipoPregunta = require('./tipoPregunta');

  var objetoEsquema = mongoose.Schema({
     nombre:String,
	 tipo: { type: mongoose.Schema.ObjectId, ref: "tipoPregunta" }
 });
 
module.exports = mongoose.model('objetos',objetoEsquema);