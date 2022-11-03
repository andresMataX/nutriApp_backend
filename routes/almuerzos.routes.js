const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerAlmuerzos, crearAlmuerzo, obtenerAlmuerzoPorSemana } = require('../controllers/almuerzos');
const { validarJWT, tieneRole } = require('../middlewares');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', [
  validarJWT,
  // tieneRole('ADMIN_ROLE'),
  validarCampos
], obtenerAlmuerzos);

router.get('/:semana', [
  validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('semana', 'La semana es obligatoria').not().isEmpty(),
  validarCampos
], obtenerAlmuerzoPorSemana);

router.post('/', [
  validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('almuerzos', 'El arreglo de almuerzos es obligatorio').not().isEmpty(),
  validarCampos
], crearAlmuerzo);


module.exports = router;