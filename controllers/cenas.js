const { response } = require("express");
const Cena = require("../models/cena");

const obtenerCenas = async (req, res = response) => {

  const cenas = await Cena.find();
  res.json(cenas);

}

const crearCena = async (req, res = response) => {

  const { dieta, name, ingredientes } = req.body;

  const cena = new Cena({ dieta, name, ingredientes });
  await cena.save();

  res.json(cena);

}


module.exports = {
  obtenerCenas,
  crearCena
}