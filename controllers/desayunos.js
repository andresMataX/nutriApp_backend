const { response } = require("express");
const Desayuno = require("../models/desayuno");
const Dieta = require("../models/dieta");

const obtenerDesayunos = async (req, res = response) => {

  const desayunos = await Desayuno.find();
  res.json(desayunos);

}

const obtenerDesayunoPorSemana = async (req, res = response) => {

  const semana = req.params.semana;

  // Obtención del desayuno que coincide con la semana
  const desayunoSemana = await Dieta.findOne({ semana });

  if (!desayunoSemana) {
    return res.status(400).json({
      msg: `La semana ${semana}, no existe.`
    });
  }

  const desayuno = await Desayuno.findById(desayunoSemana.desayuno);

  res.json(desayuno);
}

const crearDesayuno = async (req, res = response) => {

  const { desayunos } = req.body;

  const desayuno = new Desayuno({ desayunos });
  await desayuno.save();

  res.json(desayuno);

}


module.exports = {
  obtenerDesayunos,
  crearDesayuno,
  obtenerDesayunoPorSemana
}