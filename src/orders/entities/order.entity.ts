import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  image: string;

  /* @Column()
  priceUnit: number;

  @Column()
  quantity: string;

  
  ****** Investigacion *****
  @Column()
  codeDiscount: number;

  @Column()
  priceAll: string;
  */
}
