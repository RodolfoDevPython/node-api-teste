const Pokemon = require("../models/pokemon");

module.exports = {

    async inserir(req, res) {

        const { name } = req.body;
        try {

            if (await Pokemon.findOne({ name })) return res.status(400).json({ error: "Pokemon already existy" });

            const pokemon = await Pokemon.create(req.body);

            return res.json({ pokemon });

        } catch (error) {
            return res.json({ message: "Problema ao inserir" });
        }

    },

    async listagem(req, res) {

        const pokemon = await Pokemon.find();

        res.json(pokemon);
    }, 
    async update(req, res) {

        const { id } = req.params;

        const { name ,
            PokedexNumber,
            imgName ,
            generation ,
            evolutionStage ,
            evolved ,
            familyID ,
            crossGen ,
            type1 ,
            type2 ,
            weather1 ,
            weather2 ,
            statTotal ,
            atk ,
            def ,
            sta ,
            legendary ,
            aquireable ,
            spawns ,
            regional,
            raidable ,
            hatchable ,
            shiny,
            nest,
            New ,
            notGettable,
            futureEvolve,
            cp40,
            cp39 } = req.body

        const pokemon = await Pokemon.findByIdAndUpdate(id, { 
            name ,
            PokedexNumber,
            imgName ,
            generation ,
            evolutionStage ,
            evolved ,
            familyID ,
            crossGen ,
            type1 ,
            type2 ,
            weather1 ,
            weather2 ,
            statTotal ,
            atk ,
            def ,
            sta ,
            legendary ,
            aquireable ,
            spawns ,
            regional,
            raidable ,
            hatchable ,
            shiny,
            nest,
            "new": New ,
            notGettable,
            futureEvolve,
            cp40,
            cp39
        });

        if (!pokemon) return res.status(400).json({ error: "Error in updated" });

        return res.json({ message: "updated Sucess" });

    },

    async delete(req, res) {

        const { id } = req.params;

        try {

            await Pokemon.findByIdAndRemove(id);

            return res.json({ message: "deleted sucess" });

        } catch (error) {
            
            return res.status(400).json({ error: "Can't deleted" });
        }
    }
}