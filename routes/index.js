var express =  require('express');

var usuarioControlador = require('../controllers/usuarios');
var tarjetaControlador = require('../controllers/tarjetas');
var cuentaControlador = require('../controllers/cuentas');
var pruebaControlador = require('../controllers/pruebas');
var usuControlador = require('../controllers/user');
var preguntaControlador = require('../controllers/preguntas');

const auth = require('../middlewares/auth')

var router = express.Router();
 
 //usuarios
 router.route('/usuarios')
 .post(usuarioControlador.agregar)
 .get(auth,usuarioControlador.listar)
  router.route('/rbuscaUsuario')
 .post(usuarioControlador.login1)
   router.route('/rbuscaUsuarioo')
 .post(usuarioControlador.login2)
   router.route('/actualizarClave')
 .post(auth,usuarioControlador.actualizarClave);
 
 //tarjetas
 router.route('/tarjetas')
 .get(tarjetaControlador.listar)
 .post(tarjetaControlador.agregar);
 router.route('/rsaldoXTarj')
  .post(tarjetaControlador.saldoXTarj)
 router.route('/actualizarSaldo')
 .post(tarjetaControlador.actualizarSaldo);
  
 //cuentas
  router.route('/cuentas')
 .get(cuentaControlador.listar)
 .post(cuentaControlador.agregar);
 
 //pruebas
 router.route('/pruebas')
 .post(pruebaControlador.agregar)
 .get(pruebaControlador.listar)

 //preguntas
 router.route('/tipoPregunta')
 .post(preguntaControlador.agregar)
 .get(preguntaControlador.listar)

  router.route('/pregunta')
 .post(preguntaControlador.agregarPregunta)
 .get(preguntaControlador.listarPregunta)

 router.route('/objeto')
 .post(preguntaControlador.agregarObjeto)
 .get(preguntaControlador.listarObjeto)

 router.route('/private')
 .get(auth,function(req, res){
    res.status(200).send({mensaje:'acceso'})
 })

 router.route('/log')
 .post(usuControlador.singIn)

 module.exports = router