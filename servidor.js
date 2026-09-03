const express = require('express');
const app = express();
const rutasUsuarios = require('./routes/usuarios');

app.use('/', rutasUsuarios);

app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
});