import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Shipment } from './entities/shipment.entity';
import { CreateShipment } from './dto/create-shipment.dto';
import { UpdateShipment } from './dto/update-shipment.dto';

@Injectable()
export class ShipmentsService {
  constructor(
    // eslint-disable-next-line prettier/prettier
    @InjectRepository(Shipment) private shipmetsRepo: Repository<Shipment>,
  ) {}

  async findAll() {
    const findAll = await this.shipmetsRepo.findAndCount();
    if (!findAll) throw new BadRequestException({ error: 'Data Not Found' });
    return {
      status: HttpStatus.OK,
      messsage: 'Data fetch successfully',
      totalData: findAll && findAll.length ? findAll[1] : 0,
      result: findAll && findAll[0],
    };
  }

  async findOne(id: any) {
    const findOne = await this.shipmetsRepo.findOne({
      where: {
        id: id,
      },
    });
    if (!findOne) throw new BadRequestException({ error: 'Data Not Found' });
    return {
      status: HttpStatus.OK,
      messsage: 'Data fetch successfully',
      result: findOne,
    };
  }

  async create(createshipment: CreateShipment) {
    const shipmentDetails = this.shipmetsRepo.create(createshipment);
    await this.shipmetsRepo.save(shipmentDetails);
    return {
      msg: 'Data Added successfully',
      status: HttpStatus.OK,
      data: shipmentDetails,
    };
  }

  async update(id: any, updateShipment: UpdateShipment) {
    const result: any = await this.shipmetsRepo.update({ id }, updateShipment);
    return {
      status: HttpStatus.OK,
      messsage: 'Data updated successfully',
      totalData: result && result.length ? result.length : 0,
      result: result,
    };
  }

  async delete(id: number) {
    await this.shipmetsRepo.delete(id);
    return true;
  }
}
