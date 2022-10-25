const { Schema, model } = require('mongoose');

const CenaSchema = Schema({
  dieta: {
    type: Schema.Types.ObjectId,
    ref: 'Dieta',
    required: true
  },
  name: {
    type: String,
    required: [true, 'El nombre de la cena es obligatorio'],
  },
  ingredientes: [{
    type: String
  }]
});

CenaSchema.methods.toJSON = function () {
  const { __v, _id, ...cena } = this.toObject();
  cena.uid = _id;
  return {
    cena,
  };
}


module.exports = model('Cena', CenaSchema);