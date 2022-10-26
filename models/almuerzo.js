const { Schema, model } = require('mongoose');

const AlmuerzoSchema = Schema({
  name: {
    type: String,
    required: [true, 'El nombre del almuerzo es obligatorio'],
  },
  ingredientes: [{
    type: String
  }]
});

AlmuerzoSchema.methods.toJSON = function () {
  const { __v, _id, ...almuerzo } = this.toObject();
  almuerzo.uid = _id;
  return {
    almuerzo,
  };
}


module.exports = model('Almuerzo', AlmuerzoSchema);