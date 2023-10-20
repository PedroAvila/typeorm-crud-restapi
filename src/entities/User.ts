import { 
    Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity
} from "typeorm";

@Entity('Users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column({
        default: true
    })
    active: boolean;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAdd: Date;
}