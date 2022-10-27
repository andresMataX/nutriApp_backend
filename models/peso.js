const { Schema, model } = require('mongoose');

const PesoSchema = Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  peso: {
    type: Number,
    required: [true, 'El peso de la nueva medición es obligatoria'],
  },
  fecha: {
    type: Date,
    required: true
  },
  pesoTipo: {
    type: String,
    enum: ['ACTUAL', 'META', 'INICIO'],
    default: 'ACTUAL'
  }
});

PesoSchema.methods.toJSON = function () {
  const { __v, _id, ...peso } = this.toObject();
  peso.uid = _id;
  return {
    peso,
  };
}


module.exports = model('Peso', PesoSchema);