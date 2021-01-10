import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('car')
export default class Car {

    @PrimaryGeneratedColumn('uuid')
    id: string | undefined

    @Column()
    placa!: string;

    @Column()
    modelo!: string;
    
    @Column()
    ano!: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date | undefined;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date | undefined;


}
