import { getCustomRepository } from 'typeorm'
import { EPIRepository} from '../repositories/EPIRepository'

interface IEPI{
    nome_epi: string;
    validade_epi: number;
    numero_ca: number;
}
class EPIServices {
    async create({nome_epi, validade_epi, numero_ca}: IEPI ){
        const epiRepository = getCustomRepository(EPIRepository)

        const caExiste = await epiRepository.findOne({ numero_ca })

        if (caExiste){
            throw new Error('Numero de CA já existente')
        }

        const epi = await epiRepository.create({
            nome_epi,
            validade_epi,
            numero_ca
        })

        await epiRepository.save(epi)

        return epi
    }
}


export { EPIServices }