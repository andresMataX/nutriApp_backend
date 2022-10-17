const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  apellido: {
    type: String,
    required: [true, 'El apellido es obligatorio']
  },
  correo: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
  },
  avatar: {
    type: String,
  },
  rol: {
    type: String,
    enum: ['PACIENTE_ROLE', 'ADMIN_ROLE'],
    default: 'PACIENTE_ROLE'
  },
  estado: {
    type: Boolean,
    default: true
  },
  edad: {
    type: Number,
    default: false
  },
});

UsuarioSchema.methods.toJSON = function () {
  const { __v, password, _id, ...usuario } = this.toObject();
  usuario.uid = _id;
  return {
    usuario,
  };
}

module.exports = model('Usuario', UsuarioSchema);