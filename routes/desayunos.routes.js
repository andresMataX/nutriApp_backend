const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerDesayunos, crearDesayuno, obtenerDesayunoPorSemana } = require('../controllers/desayunos');
const { validarJWT, tieneRole } = require('../middlewares');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  validarCampos
], obtenerDesayunos);

router.get('/:semana', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('semana', 'La semana es obligatoria').not().isEmpty(),
  validarCampos
], obtenerDesayunoPorSemana);

router.post('/', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('desayunos', 'El arreglo de desayunos es obligatorio').not().isEmpty(),
  validarCampos
], crearDesayuno);


module.exports = router;