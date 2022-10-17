const express = require('express');
var cors = require('cors');
const { dbConnection } = require('../database/config.db');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            usuarios: '/api/usuarios',
            recetas: '/api/recetas',
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

        // this.app.use(this.paths.recetas, require('../routes/recetas.routes'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios.routes'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en: ${this.port}`);
        })
    }
}

module.exports = Server;