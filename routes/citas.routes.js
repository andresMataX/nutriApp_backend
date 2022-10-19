const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerCitas, crearCita } = require('../controllers/citas');
const { validarJWT, tieneRole } = require('../middlewares');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', [
  validarJWT,
  tieneRole('ADMIN_ROLE'),
  validarCampos
], obtenerCitas);

router.post('/', [
  validarJWT,
  tieneRole('ADMIN_ROLE'),
  validarCampos
], crearCita);


module.exports = router;