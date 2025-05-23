const express = require('express');
const mysql= require('mysql2');
const cors = require('cors');
/** Crear objeto de tipo express */
const app = express();
//Conexion a la bbdd mysql
const bbdd = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'Root.123456',
    database: 'db_usuarios'
});
// Probar la conexión
bbdd.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err);
    } else {
        console.log('Conexión a la base de datos exitosa');
    }
});

// Endpoint para Escribir en el servidor
app.post('/', ()=>{
    console.log('enviar consulta a la bbdd');
})
/** Iniciar el servidor express listen escucha conexiones entrantes  */
app.listen(3000, ()=>{
    console.log('Servidor WebArteLea en port 3000');
});