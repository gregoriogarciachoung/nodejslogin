
 var usuario = require('../models/usuarios');
const service = require('../services')

 function singUp(){
 	const usus = new usuario({
 		correo: req.body.correo,
 		clave: req.body.clave
 	})
 	usus.save((err) => {
 		if(err) res.status(500).send({mensaje: 'Error al crear usuario'})
 		return res.status(200).send({token: service.createToken(usus)})
 	})
 }
 function singIn(req, res){
 	var cla = req.body.clave;
	 var usu = req.body.correo;
	 usuario.find({correo:usu, clave:cla},function(err,resultado){
 		if(err){
 		 res.status(500).send({mensaje: err})
 		}
 		else{
 			 if(resultado == '') {
 				res.status(404).send({mensaje:'No existe el usuario'})
	 		}else{
	 			//req.usu = usuario
		 		res.status(200).send({
		 			mensaje: 'Login correcto',
		 			token: service.createtoken(usu)
		 		})
	 		}
	 		
 		}
 	})
 }

 /*function singIn(req,res){
	 //usuario.find({"clave":cla}).exec(function(err,resultado){
	//usuario.find({"clave":cla},function(err,resultado){
	 var cla = req.body.clave;
	 var usu = req.body.correo;
	 usuario.find({correo:usu, clave:cla},function(err,resultado){
		 if (err)
         {
             res.status(500).json({mensaje:'error con el listado'});
         }
         else
         {
             //res.status(200).json(resultado);
             res.status(200).send({
 			mensaje: 'Login correcto',
 			token: service.createtoken(usu)
 		})
         }
	 });
 }*/

 module.exports = {
 	singUp,
 	singIn
 }