const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerUsuarios,
  actualizarUsuarios,
  crearUsuarios,
  eliminarUsuarios } = require('../controllers/usuarios');

const { tieneRole, validarCampos, validarJWT } = require('../middlewares');

const { esRolValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const router = Router();

router.get('/', obtenerUsuarios);

router.put('/:id', [
  check('id', 'No es un ID válido').isMongoId(),
  // check('id').custom(existeUsuarioPorId),
  // check('rol').custom(esRolValido),
  validarCampos
], actualizarUsuarios);

router.post('/', [
  check('nombre', 'El nombre es obligatorio.').not().isEmpty(),
  check('password', 'El password debe de ser más de 6 letras.').isLength({ min: 6 }),
  check('correo', 'El correo no es válido.').isEmail(),
  // check('correo').custom(emailExiste),
  // check('rol').custom(esRolValido),
  validarCampos
], crearUsuarios);

router.delete('/:id', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE', 'VENTAS_ROLE'),
  check('id', 'No es un ID válido').isMongoId(),
  // check('id').custom(existeUsuarioPorId),
  // validarCampos
], eliminarUsuarios);


module.exports = router;