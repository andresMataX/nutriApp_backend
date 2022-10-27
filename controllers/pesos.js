const { response } = require("express");
const Peso = require("../models/peso");

const obtenerPesos = async (req, res = response) => {

  const pesos = await Peso.find();
  res.json(pesos);

}

const obtenerPesosPaciente = async (req, res = response) => {

  const id = req.params.id;

  const pesos = await Peso.find({ usuario: id, pesoTipo: 'ACTUAL' })

  const pesosActuales = pesos.map(p => p.peso)

  res.json(pesosActuales);
}

const crearPeso = async (req, res = response) => {

  const { usuario, peso, pesoTipo } = req.body;

  const fecha = new Date();

  const data = { usuario, peso, fecha, pesoTipo };

  const nuevoPeso = new Peso(data);
  await nuevoPeso.save();

  res.json(nuevoPeso);
}


module.exports = {
  obtenerPesos,
  crearPeso,
  obtenerPesosPaciente
}