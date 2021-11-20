import {MigrationInterface, QueryRunner} from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";

export class CriarEPI1637358346793 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            name: "EPI",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "nome_epi",
                    type: "varchar"
                },
                {
                    name: "validade_epi",
                    type: "number"
                },
                {
                    name: "numero_ca",
                    type: "number"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        })
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
