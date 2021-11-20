import { EntityRepository, Repository } from "typeorm";
import { EntregaEPI } from "../entities/EntregaEPI";


@EntityRepository( EntregaEPI )
    class EntregaEPIRepository extends Repository < EntregaEPI > {

    }

export { EntregaEPIRepository }