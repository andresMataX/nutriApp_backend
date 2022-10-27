const { Schema, model } = require('mongoose');

const DietaSchema = Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  desayuno: {
    type: Schema.Types.ObjectId,
    ref: 'Desayuno'
  },
  almuerzo: {
    type: Schema.Types.ObjectId,
    ref: 'Almuerzo'
  },
  cena: {
    type: Schema.Types.ObjectId,
    ref: 'Cena'
  },
  pasaboca: {
    type: Schema.Types.ObjectId,
    ref: 'PasaBoca'
  },
  semana: {
    type: String, // 1-7
    required: [true, 'La semana de la dieta es requerido']
  }
});

DietaSchema.methods.toJSON = function () {
  const { __v, _id, ...dieta } = this.toObject();
  dieta.uid = _id;
  return {
    dieta,
  };
}


module.exports = model('Dieta', DietaSchema);