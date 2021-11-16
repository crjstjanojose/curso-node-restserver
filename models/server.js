const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    // Configuracao da pasta publica
    this.middlewares();

    // Configuracao das Rotas
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server rodando na porta http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
