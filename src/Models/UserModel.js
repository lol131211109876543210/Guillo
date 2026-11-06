const usuariosBD = [
  { id: 1, nombre: 'Ana Gómez', email: 'ana@senas.edu.co', rol: 'Aprendiz' },
  { id: 2, nombre: 'Carlos Pérez', email: 'carlos@senas.edu.co', rol: 'Instructor' }
];

function obtenerTodos() {
  return usuariosBD;
}

function obtenerPorId(id) {
  const idNumber = Number(id);
  const usuarioEncontrado = usuariosBD.find((usuario) => {
    return usuario.id === idNumber;
  });
  return usuarioEncontrado;
}

function crear(datos) {
  const nuevoId = usuariosBD.length + 1;
  const nuevoUsuario = {
    id: nuevoId,
    nombre: datos.nombre,
    email: datos.email,
    rol: datos.rol
  };
  usuariosBD.push(nuevoUsuario);
  return nuevoUsuario;
}

export const userModel = {
  obtenerTodos,
  obtenerPorId,
  crear
};
