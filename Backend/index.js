const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');/**mecanismo de seguridad implementado por los navegadores para restringir o permitir solicitudes HTTP entre diferentes dominios. */
var session = require('express-session')

const bodyParser = require('body-parser');/**para asignar valores del formulario en body a variables  */
const encoder = bodyParser.urlencoded();/**definicion de onjeto doby-parser */


const app = express();
app.use(cors());//permite aceder a todos

app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root.123456',
    // password: '',
    database: 'db_usuarios'
    // database: 'usuarios'
});
db.connect((err)=>{
  if (err) {
    console.log(`error al conectar en la base de datos WebArteLea`);
  } else {
    console.log(`Conectado a la bbdd db_usuarios`);
  }
});
/** ------------------Endpoints login --------------- 
 * URL o ruta específica en  servidor backend a la que los clientes  pueden enviar solicitudes HTTP (GET, POST, PUT, DELETE)
*/
app.get('/login/:user/:password',(req,res)=>{
   db.query('SELECT * FROM usuarios WHERE userName =? and user_pass =? ',[req.params.user,req.params.password], (err, result) => {
    if (err) return res.json(err);
    //validar si el usuario existe
    if (result.length == 1) {
       res.json({redirect: '/usuarios',result: result});
    }else res.json({redirect: '/login', result: result, message: 'Usuario o contraseña incorrectos'});
  });
});

/* ------- Endpoints (routing) para usuarios ---------*/

// CREATE
app.post('/usuarios', (req, res) => {
  const { nombre, email,userName,user_pass } = req.body;
  /*(?)  marcadores de posición para evitar inyecciones SQL y mejorar la seguridad. Los valores reales para estos parámetros, nombre y email, se pasan en el arreglo [nombre, email]  y una función de callback */
  db.query('INSERT INTO usuarios (nombre, email,userName,user_pass) VALUES (?, ?, ?,?) ', [nombre,email,userName,user_pass], (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});

// READ
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});

// UPDATE
app.put('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, email, userName, user_pass } = req.body;
  db.query('UPDATE usuarios SET nombre =?, email =?,userName =?, user_pass =? WHERE id =?', [nombre,email,userName,user_pass,id ], (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});

// DELETE
app.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, result) => {
    if (err) return res.json(err);
    res.json(result);
    
  });
});

app.listen(3000, () => {
  console.log('Servidor WebArteLea corriendo en puerto 3000');
});

