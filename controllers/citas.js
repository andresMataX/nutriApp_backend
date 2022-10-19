const { response } = require("express");

const obtenerCitas = (req, res = response) => {
  res.json({
    msg: 'get citas'
  })
}

const crearCita = (req, res = response) => {

  const { usuario, fecha } = req.body;



  res.json({
    usuario, fecha
  })
}


module.exports = {
  obtenerCitas,
  crearCita
}