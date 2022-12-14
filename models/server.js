const express = require('express');
var cors = require('cors');
const { dbConnection } = require('../database/config.db');

class Server {

  constructor() {

    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      almuerzo: '/api/almuerzo',
      altura: '/api/altura',
      auth: '/api/auth',
      cena: '/api/cena',
      citas: '/api/citas',
      desayuno: '/api/desayuno',
      dieta: '/api/dieta',
      imc: '/api/imc',
      pasaboca: '/api/pasaboca',
      peso: '/api/peso',
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

    this.app.use(this.paths.almuerzo, require('../routes/almuerzos.routes'));
    this.app.use(this.paths.altura, require('../routes/altura.routes'));
    this.app.use(this.paths.auth, require('../routes/auth.routes'));
    this.app.use(this.paths.cena, require('../routes/cenas.routes'));
    this.app.use(this.paths.citas, require('../routes/citas.routes'));
    this.app.use(this.paths.desayuno, require('../routes/desayunos.routes'));
    this.app.use(this.paths.dieta, require('../routes/dietas.routes'));
    this.app.use(this.paths.imc, require('../routes/imc.routes'));
    this.app.use(this.paths.pasaboca, require('../routes/pasabocas.routes'));
    this.app.use(this.paths.peso, require('../routes/peso.routes'));
    this.app.use(this.paths.usuarios, require('../routes/usuarios.routes'));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en: ${this.port}`);
    })
  }
}

module.exports = Server;