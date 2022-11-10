const { response } = require("express");
const PasaBoca = require("../models/pasaboca");
const Dieta = require("../models/dieta");

const obtenerPasaBocas = async (req, res = response) => {

  const pasaBocas = await PasaBoca.find();
  res.json(pasaBocas);

}

const obtenerPasaBocaPorSemana = async (req, res = response) => {

  const semana = req.params.semana;

  // Obtención del desayuno que coincide con la semana
  const pasaSemana = await Dieta.findOne({ semana });

  if (!pasaSemana) {
    return res.status(400).json({
      msg: `La semana ${semana}, no existe.`
    });
  }

  const pasaboca = await PasaBoca.findById(pasaSemana.pasaboca);

  res.json(pasaboca);
}

const crearPasaBoca = async (req, res = response) => {

  const { pasabocas } = req.body;

  const pasaBocas = new PasaBoca({ pasabocas });
  await pasaBocas.save();

  res.json({ uid: pasaBocas._id });

}


module.exports = {
  obtenerPasaBocas,
  crearPasaBoca,
  obtenerPasaBocaPorSemana
}