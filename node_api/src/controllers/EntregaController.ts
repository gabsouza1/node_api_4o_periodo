import { Request, Response } from "express";
import { EntregaServices } from '../services/EntregaServices'



class EntregaController {
    
    async create(request: Request, response: Response ){
        const { nome_epi, data_entrega, quantidade_entrega } = request.body

        const entregaServices = new EntregaServices()

        try{
            const entrega = await entregaServices.create({ nome_epi, data_entrega, quantidade_entrega})
            return response.json(entrega)
        } catch (err) {
            return response
                .status(400)
                .json({ error: err.message})
        }
    }

    async index(request: Request, response: Response){
        const entregaServices = new EntregaServices()

        try{
            const entrega = await entregaServices.index()
            return response
            .status(200)
            .json(entrega)
        }catch (err ) {
            return response
                .status(400)
                .json({error: err.message})
        }
    }

    async show(request: Request, response: Response){
        const entregaServices = new EntregaServices()
        const { id } = request.params

        try{
            const entrega = await entregaServices.show({ id })
            return response
                .status(200)
                .json(entrega)
        } catch (err) {
            return response
                .status(400)
                .json({error: err.message})
        }
    }

    async update(request: Request, response: Response){
        const { nome_epi, data_entrega, quantidade_entrega } = request.body
        const { id } = request.params

        const entregaServices = new EntregaServices()


        try{
            const entrega = await entregaServices.update({ id, nome_epi, data_entrega, quantidade_entrega})
            return response
                .status(200)
                .json(entrega)
        } catch (err) {
            return response
                .status(400)
                .json({ error: err.message})
        }
    }

    async delete(request: Request, response: Response){
        const entregaServices = new EntregaServices()
        const { id } = request.params
        
        try{
            const entrega = await entregaServices.delete({ id })
            return response.json({ messagem: 'Entrega de EPI deletada com sucesso!'})
        }  catch (err) {
        return response 
            .status(400)
            .json({ error: err.message})
        }
    }
}


export { EntregaController}