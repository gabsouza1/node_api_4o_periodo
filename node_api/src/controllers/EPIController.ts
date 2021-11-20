import { Request, Response } from "express";
import { EPIServices } from '../services/EPIServices'



class EPIController {
    

    async create(request: Request, response: Response ){
        const { nome_epi, validade_epi, numero_ca } = request.body

        const epiServices = new EPIServices()

        try{
            const epi = await epiServices.create({ nome_epi, validade_epi, numero_ca})
            return response.json(epi)
        } catch (err) {
            return response
                .status(400)
                .json({ error: err.message})
        }
    }
}


export { EPIController }