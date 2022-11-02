const { response } = require("express");
const Cena = require("../models/cena");
const Dieta = require("../models/dieta");

const obtenerCenas = async (req, res = response) => {

  const cenas = await Cena.find();
  res.json(cenas);

}

const obtenerCenasPorSemana = async (req, res = response) => {

  const semana = req.params.semana;

  // Obtención del desayuno que coincide con la semana
  const cenaSemana = await Dieta.findOne({ semana });

  if (!cenaSemana) {
    return res.status(400).json({
      msg: `La semana ${semana}, no existe.`
    });
  }

  const cena = await Cena.findById(cenaSemana.cena);

  res.json(cena);
}

const crearCena = async (req, res = response) => {

  const { cenas } = req.body;

  const cena = new Cena({ cenas });
  await cena.save();

  res.json(cena);

}


module.exports = {
  obtenerCenas,
  crearCena,
  obtenerCenasPorSemana
}