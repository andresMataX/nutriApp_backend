const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerAlturas, crearAltura } = require('../controllers/alturas');
const { existeUsuarioPorId } = require('../helpers/db-validators');
const { validarJWT, tieneRole } = require('../middlewares');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  validarCampos
], obtenerAlturas);

router.post('/', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('usuario', 'No es un ID válido.').isMongoId(),
  check('usuario').custom(existeUsuarioPorId),
  check('altura', 'La altura del usuario es obligatorio.').not().isEmpty(),
  validarCampos
], crearAltura);


module.exports = router;