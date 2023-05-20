import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Shipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'tracking_id' })
  trackingId: number;

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
