import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Shipment } from './entities/shipment.entity';
import { shipment } from './dto/create-shipment.dto';

@Injectable()
export class ShipmentsService {
  constructor(
    // eslint-disable-next-line prettier/prettier
    @InjectRepository(Shipment) private shipmetsRepo: Repository<Shipment>
  ) {}

  findAll() {
    return this.shipmetsRepo.find();
  }

  findOne(id: any) {
    return this.shipmetsRepo.findOne(id);
  }

  create(body: shipment) {
    const newShipment = this.shipmetsRepo.create(body);
    return this.shipmetsRepo.save(newShipment);
  }

  async update(id: any, body: any) {
    const shipment = await this.shipmetsRepo.findOne(id);
    this.shipmetsRepo.merge(shipment, body);
    return this.shipmetsRepo.save(shipment);
  }

  async delete(id: number) {
    await this.shipmetsRepo.delete(id);
    return true;
  }
}
