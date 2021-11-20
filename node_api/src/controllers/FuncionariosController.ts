import { Request, Response } from "express";
import { FuncionariosServices } from '../services/FuncionariosServices'



class FuncionariosController {
     
    async create(request: Request, response: Response ){
        const { nome, cpf, funcao } = request.body

        const funcionariosServices = new FuncionariosServices()

        try{
            const funcionario = await funcionariosServices.create({ nome, cpf, funcao})
            return response.json(funcionario)
        } catch (err) {
            return response
                .status(400)
                .json({ error: err.message})
        }
    }
}

export { FuncionariosController }

