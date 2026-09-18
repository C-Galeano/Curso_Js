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


// --- Nuevo: inicio (sesion 9: validacion y manejo de errores) ---
function crearUsuario(req, res) {
  try {
    const { nombre, edad } = req.body;

    if (!nombre || typeof nombre !== 'string') {
      return res.status(400).json({ error: 'El nombre es obligatorio y debe ser texto' });
    }
    if (edad === undefined || typeof edad !== 'number' || Number.isNaN(edad)) {
      return res.status(400).json({ error: 'La edad es obligatoria y debe ser un número' });
    }
    if (edad < 0) {
      return res.status(400).json({ error: 'La edad no puede ser negativa' });
    }

    const nuevoUsuario = { id: usuarios.length + 1, nombre, edad };
    usuarios.push(nuevoUsuario);
    res.status(201).json({ mensaje: 'Usuario creado', datos: nuevoUsuario });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
// --- Nuevo: fin ---

function listarUsuarios(req, res) {
  res.json(usuarios);
}

// --- Nuevo: inicio (sesion 9: validacion y manejo de errores) ---
function actualizarUsuario(req, res) {
  try {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'Debes enviar al menos un dato para actualizar' });
    }
    if (req.body.edad !== undefined && (typeof req.body.edad !== 'number' || req.body.edad < 0)) {
      return res.status(400).json({ error: 'La edad debe ser un número mayor o igual a 0' });
    }

    Object.assign(usuario, req.body);
    res.json({ mensaje: 'Usuario actualizado', datos: usuario });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
// --- Nuevo: fin ---

function eliminarUsuario(req, res) {
  const id = parseInt(req.params.id);
  const indice = usuarios.findIndex(u => u.id === id);
  if (indice === -1) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }
  usuarios.splice(indice, 1);
  res.json({ mensaje: 'Usuario eliminado' });
}

module.exports = { verInicio, obtenerUsuario, crearUsuario,
                   listarUsuarios, actualizarUsuario, eliminarUsuario };