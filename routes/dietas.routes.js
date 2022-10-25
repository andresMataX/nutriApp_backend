const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerDietas, crearDieta } = require('../controllers/dietas');
const { existeUsuarioPorId } = require('../helpers/db-validators');
const { validarJWT, tieneRole } = require('../middlewares');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', [
  validarJWT,
  tieneRole('ADMIN_ROLE'),
  validarCampos
], obtenerDietas);

router.post('/', [
  validarJWT,
  tieneRole('ADMIN_ROLE'),
  check('usuario', 'No es un ID válido.').isMongoId(),
  check('usuario').custom(existeUsuarioPorId),
  check('desayuno', 'El desayuno de la dieta es obligatorio').not().isEmpty(),
  validarCampos
], crearDieta);


module.exports = router;