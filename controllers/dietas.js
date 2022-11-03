const { response } = require("express");
const Dieta = require("../models/dieta");

const obtenerDietas = async (req, res = response) => {

  const dietas = await Dieta.find({ usuario: req.usuario._id });

  res.json(dietas);

}

const obtenerDietaPorSemana = async (req, res = response) => {

  const semana = req.params.semana;

  // Obtención del desayuno que coincide con la semana
  // TODO: Verificar por usuario que está en la req al validar jwt
  const dietaSemana = await Dieta.findOne({ semana, usuario: req.usuario._id })
    .populate('desayuno', 'desayunos.name')
    .populate('almuerzo', 'almuerzos.name')
    .populate('cena', 'cenas.name')
    .populate('pasaboca', 'pasabocas.name')

  if (!dietaSemana) {
    return res.status(400).json({
      msg: `La semana ${semana}, no existe.`
    });
  }

  res.json(dietaSemana);
}

const crearDieta = async (req, res = response) => {

  const { usuario, desayuno, almuerzo, cena, pasaboca, semana } = req.body;

  const dieta = new Dieta({ usuario, desayuno, almuerzo, cena, pasaboca, semana });
  await dieta.save();

  res.json(dieta);

}


module.exports = {
  obtenerDietas,
  crearDieta,
  obtenerDietaPorSemana
}