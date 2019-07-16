const express = require('express');
const jwt = require('jsonwebtoken');

//REFERENCIANDO LOS MODULOS
var mongoose = require('mongoose')
var bodyparser = require('body-parser');

//conectar a la BD

mongoose.connect('mongodb://localhost/Ventas',function(err){
    if (err)
    {
        console.log('Error de conexion con la BD');
    }
    else
    {
        console.log('Conexion correcta!!');
    }
});

//creando el esquema de usuarios
 var usuarioEsquema = mongoose.Schema({
     correo:String,
     clave:String
 });

 var usuario = mongoose.model('usuarios',usuarioEsquema);

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/api', (req, res) => {
    res.json({
        message: 'holas'
    });
});

app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(holitas, 'shhhhh', (err, decoded) => {
        if(err) {
            //res.sendStatus(403);
			res.json({
                message: 'expiró',
                decoded
            });
        } else {
            res.json({
                message: 'acceso',
                decoded
            });
        }
    });
});

app.post('/api/login', (req, res) => {

    usuario.find({correo: req.body.correo, clave: req.body.clave},function(err,resultado){
        if(err){
         res.status(500).send({mensaje: err})
        }
        else{
             if(resultado == '') {
                res.status(404).send({mensaje:'No existe el usuario'})
            }else{
                jwt.sign({usuario}, 'shhhhh', {expiresIn: '30s'}, (err, token) => {
                    res.json({
                        token
                    });
                });
            }
            
        }
    })
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    holitas = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  //res.status(403).send({message:'Error'});
  }

}

app.post('/api/crear', (req, res) => {
     var miUsuario = new usuario();
     miUsuario.correo = req.body.correo;
     miUsuario.clave = req.body.clave;
     //save(); metodo para grabar
     //save(function(err, resultado){}); muestra error si sucedio
     miUsuario.save(function(err, resultado){
         if(err){
             //200 ok
             //404 página no encontrada
             //500
             res.status(500).json({mensaje:'Error con el registro'});
         }else{
            res.status(200).json({mensaje:'Registro correcto'});
         }
     });
 });
app.use( express.static( "public" ) );
app.use(express.static(__dirname + '/public'));
app.listen(3000, () => console.log('servidor puerto 3000'));