const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerUsuarios, crearUsuarios, obtenerEdad } = require('../controllers/usuarios');

const { tieneRole, validarCampos, validarJWT } = require('../middlewares');

const { esRolValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const router = Router();

router.get('/', [
  validarJWT,
  // tieneRole('ADMIN_ROLE'),
  validarCampos
], obtenerUsuarios);

router.get('/edad/:id', [
  validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  validarCampos
], obtenerEdad);

router.post('/', [
  validarJWT,
  tieneRole('ADMIN_ROLE'),
  check('nombre', 'El nombre es obligatorio.').not().isEmpty(),
  check('apellido', 'El apellido es obligatorio.').not().isEmpty(),
  check('edad', 'La edad es obligatoria.').not().isEmpty(),
  check('avatar', 'El avatar es obligatorio.').not().isEmpty(),
  check('password', 'El password debe de ser más de 6 letras.').isLength({ min: 6 }),
  check('correo', 'El correo no es válido.').isEmail(),
  check('correo').custom(emailExiste),
  check('rol').custom(esRolValido),
  validarCampos
], crearUsuarios);


module.exports = router;