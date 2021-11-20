import { Entity, 
  PrimaryColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  JoinColumn
} 
  from 
  'typeorm'
  
  import { v4 as uuid } from "uuid";
import { Funcionarios } from './Funcionarios';
  
  @Entity("entregaEPI")
  class EntregaEPI {
    @PrimaryColumn()
    id: string;

    @JoinColumn({name: 'id'})
    @ManyToOne(() => Funcionarios)
    funcionario: Funcionarios;
  
    @Column()
    funcionario_id: string;
  
    @Column()
    nome_epi: string;
  
    @Column()
    data_entrega: Date;
  
    @Column()
    quantidade_entrega: number;

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
  
  export { EntregaEPI };