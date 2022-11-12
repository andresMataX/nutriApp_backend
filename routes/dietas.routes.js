const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerDietas, crearDieta, obtenerDietaPorSemana, obtenerDietasPorPaciente } = require('../controllers/dietas');
const { existeUsuarioPorId } = require('../helpers/db-validators');
const { validarJWT, tieneRole } = require('../middlewares');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', [
  validarJWT,
  validarCampos
], obtenerDietas);

router.get('/semana/:semana', [
  validarJWT,
  check('semana', 'La semana es obligatoria').not().isEmpty(),
  validarCampos
], obtenerDietaPorSemana);

router.get('/:id', [
  validarJWT,
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  validarCampos
], obtenerDietasPorPaciente);

router.post('/', [
  validarJWT,
  tieneRole('ADMIN_ROLE'),
  check('usuario', 'No es un ID válido.').isMongoId(),
  check('usuario').custom(existeUsuarioPorId),
  check('desayuno', 'El desayuno de la dieta es obligatorio').not().isEmpty(),
  check('almuerzo', 'El almuerzo de la dieta es obligatorio').not().isEmpty(),
  check('cena', 'La cena de la dieta es obligatorio').not().isEmpty(),
  check('pasaboca', 'La pasa boca de la dieta es obligatorio').not().isEmpty(),
  check('semana', 'La semana de la dieta es requerida').not().isEmpty(),
  validarCampos
], crearDieta);


module.exports = router;