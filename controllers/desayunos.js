const { response } = require("express");
const Desayuno = require("../models/desayuno");

const obtenerDesayunos = async (req, res = response) => {

  const desayunos = await Desayuno.find();
  res.json(desayunos);

}

const crearDesayuno = async (req, res = response) => {

  const { desayunos } = req.body;

  const desayuno = new Desayuno({ desayunos });
  await desayuno.save();

  res.json(desayuno);

}


module.exports = {
  obtenerDesayunos,
  crearDesayuno
}