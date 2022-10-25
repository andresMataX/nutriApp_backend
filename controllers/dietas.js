const { response } = require("express");
const Dieta = require("../models/dieta");

const obtenerDietas = async (req, res = response) => {

  const dietas = await Dieta.find()
    .populate('desayuno', 'name')
    .populate('almuerzo', 'name')
    .populate('cena', 'name');

  res.json(dietas);

}

const crearDieta = async (req, res = response) => {

  const { usuario, desayuno, almuerzo, cena } = req.body;

  const dieta = new Dieta({ usuario, desayuno, almuerzo, cena });
  await dieta.save();

  res.json(dieta);

}


module.exports = {
  obtenerDietas,
  crearDieta
}