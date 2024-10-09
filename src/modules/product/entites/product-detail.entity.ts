import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductDetail {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  productId: number;

  @Column()
  key: string;

  @Column()
  value: string;

  //   Relations
  //   @ManyToOne(() => Product, (product) => product.details, {onDelete: "CASCADE"})
  //   product: Product;
}
