const express = require('express');
var cors = require('cors');
const { dbConnection } = require('../database/config.db');

class Server {

  constructor() {

    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      auth: '/api/auth',
      citas: '/api/citas',
      imc: '/api/imc',
      peso: '/api/peso',
      recetas: '/api/recetas',
      usuarios: '/api/usuarios',
    }

    this.conectarDB();

    this.middlewares();

    this.routes();

  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json());
  }

  routes() {

    this.app.use(this.paths.auth, require('../routes/auth.routes'));
    this.app.use(this.paths.usuarios, require('../routes/usuarios.routes'));
    this.app.use(this.paths.citas, require('../routes/citas.routes'));
    this.app.use(this.paths.peso, require('../routes/peso.routes'));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en: ${this.port}`);
    })
  }
}

module.exports = Server;