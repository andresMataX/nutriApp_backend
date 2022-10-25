const { Schema, model } = require('mongoose');

const DesayunoSchema = Schema({
  dieta: {
    type: Schema.Types.ObjectId,
    ref: 'Dieta',
    required: true
  },
  name: {
    type: String,
    required: [true, 'El nombre del desayuno es obligatorio'],
  },
  ingredientes: [{
    type: String
  }]
});

DesayunoSchema.methods.toJSON = function () {
  const { __v, _id, ...desayuno } = this.toObject();
  desayuno.uid = _id;
  return {
    desayuno,
  };
}


module.exports = model('Desayuno', DesayunoSchema);