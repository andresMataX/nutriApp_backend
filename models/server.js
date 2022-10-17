const express = require('express');
var cors = require('cors');
const { dbConnection } = require('../database/config.db');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
            buscar: '/api/buscar',
            categorias: '/api/categorias',
            usuarios: '/api/usuarios',
            productos: '/api/productos',
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

        // this.app.use(this.paths.buscar, require('../routes/buscar.routes'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en: ${this.port}`);
        })
    }
}

module.exports = Server;