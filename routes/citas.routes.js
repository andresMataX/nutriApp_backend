const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerCitas, crearCita, obtenerCitasPaciente } = require('../controllers/citas');
const { existeUsuarioPorId } = require('../helpers/db-validators');
const { validarJWT, tieneRole } = require('../middlewares');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  validarCampos
], obtenerCitas);

router.get('/:id', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  validarCampos
], obtenerCitasPaciente);

router.post('/', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('usuario', 'No es un ID válido.').isMongoId(),
  check('usuario').custom(existeUsuarioPorId),
  check('fecha', 'La fecha de la nueva cita es obligatorio.').not().isEmpty(),
  validarCampos
], crearCita);


module.exports = router;