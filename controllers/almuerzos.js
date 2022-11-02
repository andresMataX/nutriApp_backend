const { response } = require("express");
const Almuerzo = require("../models/almuerzo");
const Dieta = require("../models/dieta");

const obtenerAlmuerzos = async (req, res = response) => {

  const almuerzos = await Almuerzo.find();
  res.json(almuerzos);

}

const obtenerAlmuerzoPorSemana = async (req, res = response) => {

  const semana = req.params.semana;

  // Obtención del desayuno que coincide con la semana
  const almuerzoSemana = await Dieta.findOne({ semana });

  if (!almuerzoSemana) {
    return res.status(400).json({
      msg: `La semana ${semana}, no existe.`
    });
  }

  const almuerzo = await Almuerzo.findById(almuerzoSemana.almuerzo);

  res.json(almuerzo);
}

const crearAlmuerzo = async (req, res = response) => {

  const { almuerzos } = req.body;

  const almuerzo = new Almuerzo({ almuerzos });
  await almuerzo.save();

  res.json(almuerzo);

}


module.exports = {
  obtenerAlmuerzos,
  crearAlmuerzo,
  obtenerAlmuerzoPorSemana
}