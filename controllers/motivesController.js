import models from "../models/models.js";
const {Motives} = models

class MotivesController {
    async create(req, res){
        try {
            let {personId, relationship, quarrels, motive, date} = req.body
            await Motives.create({personId, relationship, quarrels, motive, date})
        }
        catch (e){
            res.json(e)
        }
    }

    async getAll(req, res){
        try{
            const motives = await Motives.findAndCountAll()
            if(motives.count>0){
                return res.json(motives)
            }
            return res.json('Мотивы не найдены')
        }
        catch(e){
            res.json(e)
        }
    }
}
export default new MotivesController()