import { userModel } from '../Models/UserModel.js';

export const userController = {
  getUsuarios: (req, res) => {
    const usuarios = userModel.obtenerTodos();
    res.status(200).json({ status: 'OK', data: usuarios });
  },

  getUsuarioPorId: (req, res) => {
    const usuario = userModel.obtenerPorId(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json({ status: 'OK', data: usuario });
  },

  crearUsuario: (req, res) => {
    const { nombre, email, rol } = req.body;
    if (!nombre || !email) {
      return res.status(400).json({ error: 'Nombre y email son obligatorios' });
    }
    const nuevo = userModel.crear({ nombre, email, rol });
    res.status(201).json({ message: 'Usuario creado', data: nuevo });
  }
};
