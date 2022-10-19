const { response } = require("express");

const obtenerCitas = (req, res = response) => {
  res.json({
    msg: 'get citas'
  })
}

const crearCita = (req, res = response) => {
  res.json({
    msg: 'post citas'
  })
}


module.exports = {
  obtenerCitas,
  crearCita
}