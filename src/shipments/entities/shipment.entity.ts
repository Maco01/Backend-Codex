import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Order } from 'src/orders/entities/order.entity';

@Entity()
export class Shipment {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Order)
  @JoinColumn({ name: 'tracking_id' })
  trackingId: Order;

  @Column()
  product: string;

  @Column({ name: 'shipment_type' })
  shipmentType: string;

  @Column()
  weight: number;

  @Column()
  Departure: string;

  @Column()
  Arrival: string;
}
