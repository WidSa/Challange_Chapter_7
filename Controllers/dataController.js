const model = require('../models');

module.exports = {
    index: async (req, res) => {
        const dataUser =  await model.user_game.findAll()
        res.render('dashboard', {Datas: dataUser})
    },
    create: async (req, res) => {
        try {
            const dataUser = await model.user_game.create({
                username: req.body.username,
                password: req.body.password
            })
            res.status(201).json(dataUser)
        } catch (err) {
            res.status(422).send('Unable to insert data')
        }
    },
    update: async (req, res) => {
        try {
            const Id = req.params.id
            const dataUser = await model.user_game.update({
                username: req.body.username,
                password: req.body.password
            }, {
                where: {
                    id: Id
                }
            })
            res.status(202).json(dataUser)
        } catch (err) {
            res.status(422).send('Unable to update data')
        }
    },
    delete: async (req, res)=> {
        try {
            const Id = req.params.id
            const dataUser = await model.user_game.destroy({
                where: {
                    id: Id
                }
            })
            res.status(202).send('Data has been deleted')
        } catch (err) {
            res.status(422).send('Unprocessable')
        }
    }
}