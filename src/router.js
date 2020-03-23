const express = require("express");
const pokemoncontroller = require("../src/controllers/PokemonController");

const routes = express.Router();

routes.post("/inserir", pokemoncontroller.inserir );
routes.get("/listagem", pokemoncontroller.listagem);
routes.put("/update/:id", pokemoncontroller.update);
routes.delete("/delete/:id", pokemoncontroller.delete);

module.exports = routes;