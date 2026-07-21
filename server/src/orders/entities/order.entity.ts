import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal')
    total!: number;
  
    @Column({
      default: 'pending',
    })
    status!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @ManyToOne(
        () => User,
        { eager: true },
    )
    user: User;

    @ManyToOne(
        () => Product,

        { eager: true },
    )
    product: Product;
} 