import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import { v4 as uuid } from "uuid";
  
  @Entity("funcionarios")
  class Funcionarios {
    @PrimaryColumn()
    id: string;
  
    @Column()
    nome: string;
  
    @Column()
    cpf: string;
  
    @Column()
    funcao: string;
  
    @UpdateDateColumn()
    updated_at: Date;
  
    @CreateDateColumn()
    created_at: Date;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { Funcionarios };