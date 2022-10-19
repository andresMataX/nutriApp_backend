const { response } = require("express");
const Imc = require("../models/imc");

const obtenerImcs = async (req, res = response) => {

  const imcs = await Imc.find();
  res.json(imcs);

}

const crearIMC = async (req, res = response) => {

  const { usuario, imc } = req.body;

  const fecha = new Date();

  const data = { usuario, imc, fecha };

  const nuevoImc = new Imc(data);
  await nuevoImc.save();

  res.json(nuevoImc);
}


module.exports = {
  obtenerImcs,
  crearIMC
}