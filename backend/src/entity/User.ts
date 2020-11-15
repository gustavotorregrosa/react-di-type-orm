import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class User {

    constructor(){
        this.id = 0
        this.name = ''
        this.email = ''
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

}
