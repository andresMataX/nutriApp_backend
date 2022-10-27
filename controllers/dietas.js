const { response } = require("express");
const Dieta = require("../models/dieta");

const obtenerDietas = async (req, res = response) => {

  const dietas = await Dieta.find()
    .populate('desayuno', 'desayunos.name')
    .populate('almuerzo', 'name')
    .populate('cena', 'name')
    .populate('pasaboca', 'name');

  res.json(dietas);

}

const crearDieta = async (req, res = response) => {

  const { usuario, desayuno, almuerzo, cena, pasaboca, semana } = req.body;

  const dieta = new Dieta({ usuario, desayuno, almuerzo, cena, pasaboca, semana });
  await dieta.save();

  res.json(dieta);

}


module.exports = {
  obtenerDietas,
  crearDieta
}