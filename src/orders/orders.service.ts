import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Order } from './entities/order.entity';
import { CreateOrder } from './dto/create-order.dto';
import { UpdateOrder } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    // eslint-disable-next-line prettier/prettier
    @InjectRepository(Order) private ordersRepo: Repository<Order>,
  ) {}

  async findAll() {
    const findAll = await this.ordersRepo.findAndCount();
    if (!findAll) throw new BadRequestException({ error: 'Data Not Found' });
    return {
      status: HttpStatus.OK,
      messsage: 'Data fetch successfully',
      totalData: findAll && findAll.length ? findAll[1] : 0,
      result: findAll && findAll[0],
    };
  }

  async findOne(id: any) {
    const findOne = await this.ordersRepo.findOne({
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

  async create(createOrder: CreateOrder) {
    const orderDetails = this.ordersRepo.create(createOrder);
    await this.ordersRepo.save(orderDetails);
    return {
      msg: 'Data Added successfully',
      status: HttpStatus.OK,
      data: orderDetails,
    };
  }

  async update(id: any, updateOrder: UpdateOrder) {
    console.log({ id, updateOrder });
    const result: any = await this.ordersRepo.update({ id }, updateOrder);
    return {
      status: HttpStatus.OK,
      messsage: 'Data updated successfully',
      totalData: result && result.length ? result.length : 0,
      result: result,
    };
  }

  async delete(id: any) {
    console.log(id);
    const result: any = await this.ordersRepo.delete(id);
    return {
      status: HttpStatus.OK,
      messsage: 'Data deleted successfully',
      totalData: result && result.length ? result.length : 0,
      result: result,
    };
  }
}
