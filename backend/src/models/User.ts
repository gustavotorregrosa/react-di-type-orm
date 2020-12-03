import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('user')
export default class User {

    @PrimaryGeneratedColumn('uuid')
    id: string | undefined

    @Column()
    name!: string;

    @Column()
    email!: string;
    
    @Column()
    password!: string;

    @Column({name: 'refresh_token'})
    refreshToken!: string;

    @Column({name: 'refresh_token_validity'})
    refreshTokenValidity!: Date;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date | undefined;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date | undefined;


}
