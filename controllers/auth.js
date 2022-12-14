const { request, response } = require("express");
const bcryptjs = require('bcryptjs');

const { generarJWT } = require("../helpers/generar-jwt");

const Usuario = require('../models/usuario');

const login = async (req = request, res = response) => {

  const { correo, password } = req.body;

  try {

    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos.'
      })
    }

    // Verificar si está activo
    if (!usuario.estado) {
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos.'
      })
    }

    // Verificar la contraseña
    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos.'
      })
    }

    // Generar el JWT
    const token = await generarJWT(usuario.id);

    res.json({
      usuario,
      token
    })
  } catch (error) {

    console.log(error);
    res.status(500).json({
      mgs: 'Hable con el administrador.'
    })
  }

}


module.exports = {
  login,
}