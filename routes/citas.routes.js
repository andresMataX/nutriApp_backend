const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerCitas } = require('../controllers/citas');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', obtenerCitas);


module.exports = router;