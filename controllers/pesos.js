const { response } = require("express");
const Peso = require("../models/peso");

const obtenerPesos = async (req, res = response) => {

  const pesos = await Peso.find();
  res.json(pesos);

}

const crearPeso = async (req, res = response) => {

  const { usuario, peso } = req.body;

  const fecha = new Date();

  const data = { usuario, peso, fecha };

  const nuevoPeso = new Peso(data);
  await nuevoPeso.save();

  res.json(nuevoPeso);
}


module.exports = {
  obtenerPesos,
  crearPeso
}