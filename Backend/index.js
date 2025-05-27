const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');/**mecanismo de seguridad implementado por los navegadores para restringir o permitir solicitudes HTTP entre diferentes dominios. */
const bodyParser = require('body-parser');/**para asignar valores del formulario en body a variables  */
const encoder = bodyParser.urlencoded();/**definicion de onjeto doby-parser */

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))/*para interpretar formularios */

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
    console.log(`error al conectar en la base de datos WebArteLea ${err}`);
    
  } else {
    console.log(`Conectado a la bbdd db_usuarios`);
  }
});
/** ------------------Endpoints login --------------- 
 * URL o ruta específica en  servidor backend a la que los clientes  pueden enviar solicitudes HTTP (GET, POST, PUT, DELETE)
*/
app.get("/login", encoder, function(req, res) {
  if (true) {
    res.redirect('http://localhost:4200/usuarios');
  } else {
    console.log('no econtro pagina');
    res.redirect('http://localhost:4200/login');
  }
  
});
// app.post("/login", encoder, function(req, res) {
//   res.redirect('http://localhost:4200/usuarios');
// });
app.post("/",encoder, function(req,res){
    var username = req.body.username;
    var password = req.body.password;

    connection.query("select * from loginuser where user_name = ? and user_pass = ?",[username,password],function(error,results,fields){
        if (results.length > 0) {
            res.redirect("/welcome");
        } else {
            res.redirect("/welcome");
        }
        res.end();
    })
})





/* ------- Endpoints (routing) para usuarios ---------*/

// CREATE
app.post('/usuarios', (req, res) => {
  const { nombre, email, id } = req.body;
  /*(?)  marcadores de posición para evitar inyecciones SQL y mejorar la seguridad. Los valores reales para estos parámetros, nombre y email, se pasan en el arreglo [nombre, email]  y una función de callback */
  db.query('INSERT INTO usuarios (nombre, email) VALUES (?, ?)', [nombre, email], (err, result) => {
    if (err) return res.json(err);
    console.log(`el id es: ${id}`);
    res.json(result);
  });
});

// READ
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, result) => {
    if (err) return res.json(err);
    console.log(`get al servidor mysql`);
    res.json(result);
  });
});

// UPDATE
app.put('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;
  db.query('UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?', [nombre, email, id], (err, result) => {
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

