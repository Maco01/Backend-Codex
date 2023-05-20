import { IsNumber, IsString } from 'class-validator';

export class CreateShipment {
  @IsNumber()
  trackingId: number;
  @IsString()
  product: string;
  @IsNumber()
  weight: number;
  @IsString()
  shipmentType: string;
  @IsString()
  Departure: string;
  @IsString()
  Arrival: string;
}
