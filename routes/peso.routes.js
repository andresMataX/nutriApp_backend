const { Router } = require('express');
const { check } = require('express-validator');

const { existeUsuarioPorId } = require('../helpers/db-validators');
const { validarJWT, tieneRole } = require('../middlewares');
const { validarCampos } = require('../middlewares/validar-campos');
const { obtenerPesos, crearPeso } = require('../controllers/pesos');

const router = Router();

router.get('/', [
  validarJWT,
  tieneRole('ADMIN_ROLE'),
  validarCampos
], obtenerPesos);

router.post('/', [
  validarJWT,
  tieneRole('ADMIN_ROLE'),
  check('usuario', 'No es un ID válido.').isMongoId(),
  check('usuario').custom(existeUsuarioPorId),
  check('peso', 'El peso de la nueva medición es obligatoria').not().isEmpty(),
  validarCampos
], crearPeso);


module.exports = router;