const { response } = require("express");
const Almuerzo = require("../models/almuerzo");

const obtenerAlmuerzos = async (req, res = response) => {

  const almuerzos = await Almuerzo.find();
  res.json(almuerzos);

}

const crearAlmuerzo = async (req, res = response) => {

  const { almuerzos } = req.body;

  const almuerzo = new Almuerzo({ almuerzos });
  await almuerzo.save();

  res.json(almuerzo);

}


module.exports = {
  obtenerAlmuerzos,
  crearAlmuerzo
}