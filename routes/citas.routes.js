const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerCitas, crearCita } = require('../controllers/citas');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', obtenerCitas);

router.post('/', crearCita);


module.exports = router;