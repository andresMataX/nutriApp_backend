const { Router } = require('express');
const { check } = require('express-validator');

const { existeUsuarioPorId } = require('../helpers/db-validators');
const { validarJWT, tieneRole } = require('../middlewares');
const { validarCampos } = require('../middlewares/validar-campos');
const { obtenerPesos, crearPeso, obtenerPesosPaciente, obtenerPesoActual } = require('../controllers/pesos');

const router = Router();

router.get('/', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  validarCampos
], obtenerPesos);

router.get('/actual/:id', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  validarCampos
], obtenerPesoActual);

router.get('/:id', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  validarCampos
], obtenerPesosPaciente);

router.post('/', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('usuario', 'No es un ID válido.').isMongoId(),
  check('usuario').custom(existeUsuarioPorId),
  check('peso', 'El peso de la nueva medición es obligatoria').not().isEmpty(),
  validarCampos
], crearPeso);


module.exports = router;