import { EntityRepository, Repository } from "typeorm";
import { Funcionarios } from "../entities/Funcionarios";


@EntityRepository(Funcionarios)
    class FuncionariosRepository extends Repository <Funcionarios> {

    }

export { FuncionariosRepository }