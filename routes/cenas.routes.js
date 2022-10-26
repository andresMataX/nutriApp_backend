const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerCenas, crearCena } = require('../controllers/cenas');
const { validarJWT, tieneRole } = require('../middlewares');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  validarCampos
], obtenerCenas);

router.post('/', [
  // validarJWT,
  // tieneRole('ADMIN_ROLE'),
  check('name', 'El nombre del desayuno es obligatorio').not().isEmpty(),
  check('ingredientes', 'Los ingredientes del desayuno son obligatorios').not().isEmpty(),
  validarCampos
], crearCena);


module.exports = router;