import { IsString, IsNumber } from 'class-validator';

export class CreateOrder {
  @IsString()
  productName: string;

  @IsString()
  image: string;
}
