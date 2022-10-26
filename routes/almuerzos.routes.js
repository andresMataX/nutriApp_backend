const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerAlmuerzos, crearAlmuerzo } = require('../controllers/almuerzos');
const { validarJWT, tieneRole } = require('../middlewares');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  validarCampos
], obtenerAlmuerzos);

router.post('/', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('name', 'El nombre del desayuno es obligatorio').not().isEmpty(),
  check('ingredientes', 'Los ingredientes del desayuno son obligatorios').not().isEmpty(),
  validarCampos
], crearAlmuerzo);


module.exports = router;