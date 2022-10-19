const { response } = require("express");
const Cita = require("../models/cita");

const obtenerCitas = async (req, res = response) => {

  const citas = await Cita.find();
  res.json(citas);

}

const crearCita = async (req, res = response) => {

  const { usuario, fecha } = req.body;

  const citaDB = await Cita.findOne({ usuario, fecha });

  if (citaDB) {
    return res.status(400).json({
      mgs: 'Ya existe una cita con el paciente para este día.'
    })
  }

  const data = { usuario, fecha }

  const cita = new Cita(data);
  await cita.save()

  res.json(cita);
}


module.exports = {
  obtenerCitas,
  crearCita
}