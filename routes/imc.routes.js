const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerImcs, crearIMC } = require('../controllers/imc');

const { existeUsuarioPorId } = require('../helpers/db-validators');
const { validarJWT, tieneRole } = require('../middlewares');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', [
  validarJWT,
  tieneRole('ADMIN_ROLE'),
  validarCampos
], obtenerImcs);

router.post('/', [
  validarJWT,
  tieneRole('ADMIN_ROLE'),
  check('usuario', 'No es un ID válido.').isMongoId(),
  check('usuario').custom(existeUsuarioPorId),
  check('imc', 'El imc de la nueva medición es obligatoria').not().isEmpty(),
  validarCampos
], crearIMC);


module.exports = router;