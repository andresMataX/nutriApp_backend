const { response } = require("express");
const PasaBoca = require("../models/pasaboca");

const obtenerPasaBocas = async (req, res = response) => {

  const pasaBocas = await PasaBoca.find();
  res.json(pasaBocas);

}

const crearPasaBoca = async (req, res = response) => {

  const { pasabocas } = req.body;

  const pasaBocas = new PasaBoca({ pasabocas });
  await pasaBocas.save();

  res.json(pasaBocas);

}


module.exports = {
  obtenerPasaBocas,
  crearPasaBoca
}