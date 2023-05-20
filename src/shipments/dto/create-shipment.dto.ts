import { IsNumber, IsString } from 'class-validator';

export class CreateShipment {
  trackingId: any;
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
