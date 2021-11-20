import {getCustomRepository } from 'typeorm'
import { FuncionariosRepository } from '../repositories/FuncionariosRepository'


interface IFuncionario {
    nome: string,
    cpf: string,
    funcao: string
}

class FuncionariosServices {

    async create({ nome, cpf, funcao}: IFuncionario){
        const funcionariosRepository = getCustomRepository (FuncionariosRepository)

        const cpfExiste = await funcionariosRepository.findOne({cpf})
        
        if(cpfExiste) {
            throw new Error('CPF já existente')
        }

        const  funcionarios = await funcionariosRepository.create({
            nome,
            cpf,
            funcao
        })

        await funcionariosRepository.save(funcionarios)

        return funcionarios
    }
}


export { FuncionariosServices }