import { Router } from 'express';
import { userController } from '../Controllers/UserController.js';

// Capa de Enrutamiento (Routes): Asigna endpoints a controladores
const router = Router();

router.get('/', userController.getUsuarios);
router.get('/:id', userController.getUsuarioPorId);
router.post('/', userController.crearUsuario);

export default router;
