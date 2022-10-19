const { Schema, model } = require('mongoose');

const CitaSchema = Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  fecha: {
    type: string, // '18/10/2022'
    required: [true, 'La fecha de la nueva cita es obligatoria'],
  }
});


module.exports = model('Cita', CitaSchema)