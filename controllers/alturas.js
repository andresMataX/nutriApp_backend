const { response } = require("express");
const Altura = require("../models/altura");

const obtenerAlturas = async (req, res = response) => {

  const id = req.params.id;

  const altura = await Altura.findOne({ usuario: id });

  res.json({ altura: altura.altura });

}

const crearAltura = async (req, res = response) => {

  const { usuario, altura } = req.body;

  const alturaDB = await Altura.findOne({ usuario, altura });

  if (alturaDB) {
    return res.status(400).json({
      mgs: 'Ya existe una altura con el paciente.'
    })
  }

  const data = { usuario, altura }

  const alturaNueva = new Altura(data);
  await alturaNueva.save()

  res.json(alturaNueva);
}


module.exports = {
  obtenerAlturas,
  crearAltura
}