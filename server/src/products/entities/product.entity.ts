import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column('text')
    description!: string;

    @Column('decimal',
        { 
            precision: 10,
            scale: 2,
        }
    )
    price!: number;

    @Column({ default: 0 })
    stock!: number;

    @Column({ default: 0 })
    discount!: number;

    @Column()
    category!: string;

    @Column(
        {
            nullable: true,
        }
    )
    image!: string[];

    @Column({ default: false })
    featured!: boolean;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}