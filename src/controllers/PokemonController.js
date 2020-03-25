const Pokemon = require("../models/pokemon");

module.exports = {

    async inserir(req, res) {
        const { name } = req.body.info;

        const dados = req.body.info;

        try {

            if (await Pokemon.findOne({ name })) return res.status(200).json({ message: "Pokemon already existy" });
            
            const pokemon = await Pokemon.create(dados);

            return res.status(201).json({ message: `Pokemon ${name} created success` , pokemon});

        } catch (error) {

            return res.status(400).json({ message: "Problema ao inserir" });

        }

    },

    async listagem(req, res) {

        const { page = 1 } = req.query; 

        const option = {
            page,
            limit: 5,
        }

        const pokemon = await Pokemon.paginate({}, option);

        res.json(pokemon);
    },
    async listagem_name(req, res) {

        const { name } = req.params;
        
        try {
            Pokemon.find({ name: {
                $regex: new RegExp(name, "ig")
                    }
            },function(err, doc) {
                if (err) {
                    
                    return res.json("Not found pokemon");        
                }
                
                return res.json(doc);
            });
        } catch (error) {
            return res.json("Error");    
        }

    },
    async listagem_id(req, res) {

        const { id } = req.params;
    
        const pokemon = await Pokemon.findById(id);

        res.json(pokemon);
    }, 
    async update(req, res) {

        const { id } = req.params;

        const dados = req.body.info;

        const pokemon = await Pokemon.findByIdAndUpdate(id, dados);

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

        const pathImg = `${process.env.APP_URL}files/${imgName}`

        const pokemon = await Pokemon.findByIdAndUpdate(id, { imgName : pathImg });

        if (!pokemon) return res.status(400).json({ error: "Error in updated" });

        return res.json({ message: "updated Sucess" });

    }
}
