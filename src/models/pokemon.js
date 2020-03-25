const mongoose = require("../database");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const mongoosePaginate = require("mongoose-paginate-v2");

const PokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
    },
    pokedexNumber: {
        type: String,
        require: true
    },
    imgName: {
        type: String,
        require: true,
    },
    generation: {
        type: String,
        require: true,
    },
    evolved: {
        type: String,
        require: true,
    },
    familyID: {
        type: String,
        require: true,
    },
    crossGen: {
        type: String,
        require: true,
    },
    type1:{
        type: String,
        require: true,
    },
    type2:{
        type: String,
        require: true,
    },
    weather1:{
        type: String,
        require: true,
    },
    weather2:{
        type: String,
        require: true,
    },
    statTotal: {
        type: String,
        require: true,        
    },
    atk: {
        type: String,
        require: true,        
    },
    def: {
        type: String,
        require: true,        
    },
    sta: {
        type: String,
        require: true,        
    },
    legendary: {
        type: String,
        require: true,        
    },
    aquireable: {
        type: String,
        require: true,        
    },
    spawns: {
        type: String,
        require: true,        
    },
    regional: {
        type: String,
        require: true,        
    },
    raidable: {
        type: String,
        require: true,        
    },
    hatchable: {
        type: String,
        require: true,        
    },
    shiny: {
        type: String,
        require: true,        
    },
    nest: {
        type: String,
        require: true,        
    },
    notGettable: {
        type: String,
        require: true,        
    },
    futureEvolve: {
        type: String,
        require: true,        
    },
    cp40: {
        type: String,
        require: true,        
    },
    cp39: {
        type: String,
        require: true,        
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

});

PokemonSchema.plugin(mongoosePaginate);

PokemonSchema.pre("remove", function() {
    return promisify(fs.unlink)(this.imgName);
});

const Pokemon = mongoose.model("Pokemon", PokemonSchema );

module.exports = Pokemon;