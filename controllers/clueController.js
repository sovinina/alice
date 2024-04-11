import models from "../models/models.js";
const {Clues} = models

class CluesController {
    async create(req, res){
        try {
            let {personId, evidence, witness_statements, alibi, statements} = req.body
            await Clues.create({personId, evidence, witness_statements, alibi, statements})
        }
        catch (e){
            res.json(e)

        }
    }

    async getAll(req, res){
        try{
            const clues = await Clues.findAndCountAll()
            if(clues.count>0){
                return res.json(clues)
            }
            return res.json('Улики не найдены')
        }
        catch(e){
            res.json(e)
        }
    }
}

export default new CluesController()