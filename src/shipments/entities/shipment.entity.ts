import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  trackingId: number;

  @Column()
  product: string;

  @Column()
  weight: number;

  @Column()
  Departure: string;

  @Column()
  Arrival: string;
}
