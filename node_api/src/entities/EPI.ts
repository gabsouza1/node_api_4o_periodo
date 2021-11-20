import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
    JoinColumn
  } from "typeorm";
  
  import { v4 as uuid } from "uuid";
  
  @Entity("epi")
  class EPI {
    @PrimaryColumn()
    id: string;
    
    @JoinColumn()
    @Column()
    nome_epi: string;
  
    @Column()
    validade_epi: number;
  
    @Column()
    numero_ca: number;
    
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { EPI };