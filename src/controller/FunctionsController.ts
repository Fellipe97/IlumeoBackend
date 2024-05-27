import { Request, Response } from "express";


import moment from 'moment'
import 'moment/dist/locale/pt-br'

import { User, UserInterface } from '../models/Users';



const FunctionsController = {
    teste: async (req: Request, res: Response) => {
        try {
            const users = await User.findAll()
            console.log('users: ', users)
            res.json({ message: 'Hello, world!' });
        } catch (error) {
            console.log('Erro: ', error)
        } finally {
            console.log('Teste concluído com sucesso.\n Api funcionbando perfeitamente.')
        }
    }
}

export default () => FunctionsController