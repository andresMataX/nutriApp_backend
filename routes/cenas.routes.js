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
  check('cenas', 'El arreglo de cenas es obligatorio').not().isEmpty(),
  validarCampos
], crearCena);


module.exports = router;