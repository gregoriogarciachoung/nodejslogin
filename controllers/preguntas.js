 var tipoPregunta = require('../models/tipoPregunta');
 var pregunta = require('../models/preguntas');
var objeto = require('../models/objetoPregunta');

exports.agregar = function(req,res){
     var tp = new tipoPregunta();
     tp.titulo = req.body.titulo;
     tp.descripcion = req.body.descripcion;
     tp.save(function(err,resultado){
         if (err)
         {
             res.status(500)
             .json({mensaje:'Error con el registro'})
         }
         else
         {
             res.status(200)
             .json({mensaje:'Registro correcto'});
         }
     });

 };
exports.listar = function(req,res){
     tipoPregunta.find(function(err,resultado){
         if (err)
         {
             res.status(500).json({mensaje:'error con el listado'});
         }
         else
         {
             res.status(200).json(resultado);
         }
     });
 };

 exports.agregarPregunta = function(req,res){
     var p = new pregunta();
     p.pregunta = req.body.pregunta;
     p.respuesta = req.body.respuesta;
     p.tipo = req.body.tipo;
     p.save(function(err,resultado){
         if (err)
         {
             res.status(500)
             .json({mensaje:'Error con el registro'})
         }
         else
         {
             res.status(200)
             .json({mensaje:'Registro correcto'});
         }
     });

 };
exports.listarPregunta = function(req,res){
     pregunta.find(function(err,resultado){
         tipoPregunta.populate(resultado, {path: "tipo"},function(err, resultado){
         	if (err)
         	{
           	  res.status(500).json({mensaje:'error con el listado'});
         	}
         	else
         	{
           	  res.status(200).json(resultado);
         	}
         })
     });
 };

 exports.agregarObjeto = function(req,res){
     var o = new objeto();
     o.nombre = req.body.nombre;
     o.tipo = req.body.tipo;
     o.save(function(err,resultado){
         if (err)
         {
             res.status(500)
             .json({mensaje:'Error con el registro'})
         }
         else
         {
             res.status(200)
             .json({mensaje:'Registro correcto'});
         }
     });

 };
 exports.listarObjeto = function(req,res){
     objeto.find(function(err,resultado){
         tipoPregunta.populate(resultado, {path: "tipo"},function(err, resultado){
         	if (err)
         	{
           	  res.status(500).json({mensaje:'error con el listado'});
         	}
         	else
         	{
           	  res.status(200).json(resultado);
         	}
         })
     });
 };

 exports.generarPregunta = function(req,res){
     pregunta.find(function(err,resultado){
         tipoPregunta.populate(resultado, {path: "tipo"},function(err, resultado){
         	if (err)
         	{
           	  res.status(500).json({mensaje:'error con el listado'});
         	}
         	else
         	{
           	  res.status(200).json(resultado);
         	}
         })
     });
 };