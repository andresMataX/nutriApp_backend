const { response } = require("express");
const Imc = require("../models/imc");

const obtenerImcs = async (req, res = response) => {

  const imcs = await Imc.find();
  res.json(imcs);

}

const obtenerImcPaciente = async (req, res = response) => {

  const id = req.params.id;

  const imcs = await Imc.find({ usuario: id })

  const imcsActuales = imcs.map(p => p.imc)

  res.json(imcsActuales);
}

const obtenerImcActual = async (req, res = response) => {

  const id = req.params.id;

  const imc = await Imc.findOne({ usuario: id }).sort({ fecha: -1 });

  res.json({ imc: imc.imc });
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
  crearIMC,
  obtenerImcPaciente,
  obtenerImcActual
}