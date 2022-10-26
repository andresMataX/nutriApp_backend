const { Schema, model } = require('mongoose');

const AlturaSchema = Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  altura: {
    type: String,
    required: [true, 'La altura del usuario es obligatoria'],
  }
});

AlturaSchema.methods.toJSON = function () {
  const { __v, _id, ...altura } = this.toObject();
  altura.uid = _id;
  return {
    altura,
  };
}


module.exports = model('Altura', AlturaSchema);