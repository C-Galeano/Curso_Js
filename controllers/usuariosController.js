const usuarios = [];

function verInicio(req, res) {
  res.send('Servidor funcionando');
}

function obtenerUsuario(req, res) {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (!usuario) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }
  res.json(usuario);
}


function crearUsuario(req, res) {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    ...req.body
  };
  usuarios.push(nuevoUsuario);
  res.status(201).json({
    mensaje: 'Usuario creado',
    datos: nuevoUsuario
  });
}

function listarUsuarios(req, res) {
  res.json(usuarios);
}

// --- Nuevo: inicio ---
function actualizarUsuario(req, res) {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }
  Object.assign(usuario, req.body);
  res.json({ mensaje: 'Usuario actualizado', datos: usuario });
}

function eliminarUsuario(req, res) {
  const id = parseInt(req.params.id);
  const indice = usuarios.findIndex(u => u.id === id);
  if (indice === -1) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }
  usuarios.splice(indice, 1);
  res.json({ mensaje: 'Usuario eliminado' });
}
// --- Nuevo: fin ---

module.exports = { verInicio, obtenerUsuario, crearUsuario, listarUsuarios, actualizarUsuario, eliminarUsuario };