var mongoose = require('mongoose');
//creando el esquema de usuarios
var tipoPregunta = require('./tipoPregunta');

  var preguntaEsquema = mongoose.Schema({
     pregunta:String,
     respuesta:String,
	 tipo: { type: mongoose.Schema.ObjectId, ref: "tipoPregunta" }
 });
 
module.exports = mongoose.model('preguntas',preguntaEsquema);