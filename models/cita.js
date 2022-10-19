const { Schema, model } = require('mongoose');

const CitaSchema = Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  fecha: {
    type: String,
    required: [true, 'La fecha de la nueva cita es obligatoria'],
  }
});

CitaSchema.methods.toJSON = function () {
  const { __v, _id, ...cita } = this.toObject();
  cita.uid = _id;
  return {
    cita,
  };
}


module.exports = model('Cita', CitaSchema);