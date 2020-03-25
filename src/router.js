const express = require("express");
const pokemoncontroller = require("../src/controllers/PokemonController");
const multer = require("multer");
const multerConfig = require("./config/multer");

const routes = express.Router();
//multer é um middleware de uploads de arquivos

routes.post("/pokemon", pokemoncontroller.inserir );
routes.get("/pokemon", pokemoncontroller.listagem);
routes.get("/pokemon/:id", pokemoncontroller.listagem_id);
routes.get("/pokemon/name/:name", pokemoncontroller.listagem_name);
routes.put("/pokemon/:id", pokemoncontroller.update);
routes.put("/update-img/:id", multer(multerConfig).single('file'), pokemoncontroller.updateImg);
routes.delete("/delete/:id", pokemoncontroller.delete);

module.exports = routes;