import models from "../models/models.js";
const {People} = models

class PeopleController{
    async create(req, res){
        try {
            let {name, date, address, latitude, longitude} = req.body
            if(!name){
                return res.json('Введите имя')
            }
            await People.create({name, date, address, latitude, longitude})
        }
        catch (e){
            res.json(e)

        }
    }

    async getAll(req, res){
        try{
            const people = await People.findAndCountAll()
            if(people.count>0){
                return res.json(people)
            }
            return res.json('Пользователи не найдены')
        }
        catch(e){
            res.json(e)
        }
    }

    async delete(req, res){
        const {id} = req.params
        const people = await People.findOne({where:{id}})
        if(!people){
            return res.json('Пользователь не найден')
        }
        people.destroy()
        res.json('Пользователь стёрт >:)')
    }

    async patch(req, res){
        try{
            const {id} = req.params
            const {name, date, address} = req.body
            const people = await People.findByPk(id)
            if(!people){
                return res.json("такого человечка нет, уходите")
            }
            await people.update({name, date, address})
            res.json('ура обновление подъехало')
        }
        catch (e){
            res.json(e)
        }
    }
}

export default new PeopleController()


