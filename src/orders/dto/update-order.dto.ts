import { PartialType } from '@nestjs/mapped-types';
import { CreateOrder } from './create-order.dto';

export class UpdateOrder extends PartialType(CreateOrder) {}
