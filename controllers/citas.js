const { response } = require("express");

const obtenerCitas = (req, res = response) => {
  res.json({
    msg: 'get citas'
  })
}


module.exports = {
  obtenerCitas
}