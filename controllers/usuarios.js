const { response } = require("express");

const obtenerUsuarios = (req, res = response) => {
  res.json({
    msg: 'Ho'
  })
}

const crearUsuarios = (req, res = response) => {
  res.json({
    msg: 'pest'
  })
}

const actualizarUsuarios = (req, res = response) => {
  res.json({
    msg: 'put'
  })
}

const eliminarUsuarios = (req, res = response) => {
  res.json({
    msg: 'delete'
  })
}


module.exports = {
  obtenerUsuarios,
  actualizarUsuarios,
  crearUsuarios,
  eliminarUsuarios
}