var mongoose = require('mongoose');
//creando el esquema de usuarios

  var tipoPreguntaEsquema = mongoose.Schema({
     titulo:String,
     descripcion:String
 });
 
module.exports = mongoose.model('tipoPregunta',tipoPreguntaEsquema);

