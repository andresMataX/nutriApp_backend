const { Schema, model } = require('mongoose');

const PasaBocaSchema = Schema({
  pasabocas: [{
    name: {
      type: String,
      required: [true, 'El nombre del almuerzo es obligatorio'],
    },
    ingredientes: [{
      type: String
    }]
  }]
});

PasaBocaSchema.methods.toJSON = function () {
  const { __v, _id, ...pasaboca } = this.toObject();
  pasaboca.uid = _id;
  return {
    pasaboca,
  };
}


module.exports = model('PasaBoca', PasaBocaSchema);