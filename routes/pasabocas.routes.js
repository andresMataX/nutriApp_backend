const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerPasaBocas, crearPasaBoca, obtenerPasaBocaPorSemana } = require('../controllers/pasabocas');
const { validarJWT, tieneRole } = require('../middlewares');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', [
  validarJWT,
  // tieneRole('ADMIN_ROLE'),
  validarCampos
], obtenerPasaBocas);

router.get('/:semana', [
  validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('semana', 'La semana es obligatoria').not().isEmpty(),
  validarCampos
], obtenerPasaBocaPorSemana);

router.post('/', [
  validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('pasabocas', 'El arreglo de pasabocas es obligatorio').not().isEmpty(),
  validarCampos
], crearPasaBoca);


module.exports = router;