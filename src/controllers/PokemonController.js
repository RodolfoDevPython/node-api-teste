const Pokemon = require("../models/pokemon");

module.exports = {

    async inserir(req, res) {
        console.log(req.file)
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

        const pokemon = await Pokemon.findByIdAndUpdate(id,  req.body );

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
    },

    async updateImg(req, res) {

        const { id } = req.params;
        const { filename: imgName } = req.file;

        console.log(imgName);
        const pathImg = `${process.env.APP_URL}/files/${imgName}`

        const pokemon = await Pokemon.findByIdAndUpdate(id, { imgName : pathImg });

        if (!pokemon) return res.status(400).json({ error: "Error in updated" });

        return res.json({ message: "updated Sucess" });

    }
}