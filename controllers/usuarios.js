const { response } = require("express");

const obtenerUsuarios = (req, res = response) => {
  res.json({
    msg: 'Ho'
  })
}


module.exports = {
  obtenerUsuarios
}