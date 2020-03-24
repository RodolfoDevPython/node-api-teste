const express = require("express");
const pokemoncontroller = require("../src/controllers/PokemonController");
const multer = require("multer");
const multerConfig = require("./config/multer");


const routes = express.Router();
//multer é um middleware de uploads de arquivos
routes.post("/inserir", multer(multerConfig).single('file'), pokemoncontroller.inserir );
routes.get("/listagem", pokemoncontroller.listagem);
routes.put("/update/:id", pokemoncontroller.update);
routes.put("/update-img/:id", multer(multerConfig).single('file'), pokemoncontroller.updateImg);
routes.delete("/delete/:id", pokemoncontroller.delete);

module.exports = routes;