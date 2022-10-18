const { response } = require("express");
const bcryptjs = require('bcryptjs');
const Usuario = require("../models/usuario");

const obtenerUsuarios = async (req, res = response) => {

  const usuarios = await Usuario.find({ estado: true });

  res.json({
    usuarios
  });

}

const crearUsuarios = async (req, res = response) => {

  const { correo, password, estado, ...body } = req.body;

  const usuarioDB = await Usuario.findOne({ correo });
  if (usuarioDB) {
    return res.status(400).json({
      msg: `El correo ${usuarioDB.correo}, ya existe.`
    });
  }

  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  const passwordCrypt = bcryptjs.hashSync(password, salt);

  const data = {
    correo,
    password: passwordCrypt,
    ...body
  }

  const usuario = new Usuario(data);
  await usuario.save();

  res.json(usuario);

}


module.exports = {
  obtenerUsuarios,
  crearUsuarios,
}