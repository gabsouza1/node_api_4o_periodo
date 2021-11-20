import { EntityRepository, Repository } from "typeorm";
import { EPI } from "../entities/EPI";


@EntityRepository( EPIRepository )
    class EPIRepository extends Repository < EPI > {

    }

export { EPIRepository }