import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Shipment } from 'src/shipments/entities/shipment.entity';
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  image: string;

  @OneToOne(() => Shipment, (shipment) => shipment.trackingId)
  shipment: Shipment;

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
