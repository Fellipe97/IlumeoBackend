import { Request, Response } from "express";


import moment from 'moment'
import 'moment/dist/locale/pt-br'

import { User, UserInterface } from '../models/Users';
import { PointSystem, PointSystemInterface } from '../models/PointSystem';



const FunctionsController = {
    teste: async (req: Request, res: Response) => {
        try {
            res.json({ message: 'Hello, world!' });
        } catch (error) {
            console.log('Erro: ', error)
        } finally {
            console.log('Teste concluído com sucesso.\n Api funcionbando perfeitamente.')
        }
    },


    login: async (req: Request, res: Response) => {
        try {
            const { code } = req.body
            console.log('code: ', code)
            const user: UserInterface | null = await User.findOne({ where: { code } })
            if (!user) {
                res.json({ error: 'Usuário não cadastrado.' })
            } else {
                const points = await PointSystem.findAll({ where: { user_id: user?.id } })
                res.json({ user, points });
            }
        } catch (error) {
            console.log('Erro: ', error)
            res.json({ error: 'Erro ao se conectar ao banco de dados.' })
        }
    },

    startPoint: async (req: Request, res: Response) => {
        try {
            const { date, currentDate, user_id } = req.body

            console.log('\n\n\nreq:\n', req.body)
            const points = await PointSystem.findOne({ where: { user_id, date } })
            if (!points) {
                const newPointSystem = new PointSystem({
                    user_id,
                    date,
                    begin: currentDate
                })
                await newPointSystem.save();
            }
            res.json({ msg: 'Ponto cadastrado com sucesso' });
        } catch (error) {
            console.log('Erro: ', error)
            res.json({ error: 'Não foi possível registrar a entrada.' })
        }
    },

    endPoint: async (req: Request, res: Response) => {
        try {
            const { date, end, user_id, hours } = req.body
            console.log('\n\n\nreq:\n', req.body)
            const points = await PointSystem.findOne({ where: { user_id, date } })
            if (!points) {
                res.json({ error: 'Erro ao se comunicar ao banco de dados, tente novamente.' })
            } else {
                await PointSystem.update({ end, hours }, {
                    where: { user_id, date }
                })
                res.json({ msg: 'Ponto cadastrado com sucesso' });
            }
        } catch (error) {
            console.log('Erro: ', error)
            res.json({ error: 'Não foi possível registrar a entrada.' })
        }
    },


}

export default () => FunctionsController