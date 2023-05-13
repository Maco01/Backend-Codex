import { PartialType } from '@nestjs/mapped-types';
import { CreateShipment } from './create-shipment.dto';

export class UpdateShipment extends PartialType(CreateShipment) {}
