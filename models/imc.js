const { Schema, model } = require('mongoose');

const ImcSchema = Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  imc: {
    type: Number,
    required: [true, 'El imc de la nueva medición es obligatoria'],
  },
  fecha: {
    type: Date,
    required: true
  }
});

ImcSchema.methods.toJSON = function () {
  const { __v, _id, ...imc } = this.toObject();
  imc.uid = _id;
  return {
    imc,
  };
}


module.exports = model('IMC', ImcSchema);