const { response } = require("express");
const PasaBoca = require("../models/pasaboca");

const obtenerPasaBocas = async (req, res = response) => {

  const pasaBocas = await PasaBoca.find();
  res.json(pasaBocas);

}

const crearPasaBoca = async (req, res = response) => {

  const { dieta, name, ingredientes } = req.body;

  const pasaBocas = new PasaBoca({ dieta, name, ingredientes });
  await pasaBocas.save();

  res.json(pasaBocas);

}


module.exports = {
  obtenerPasaBocas,
  crearPasaBoca
}