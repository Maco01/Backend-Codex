import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Res,
  Req,
} from '@nestjs/common';
import { Response } from 'express';
import { OrdersService } from './orders.service';
import { CreateOrder } from './dto/create-order.dto';
import { UpdateOrder } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Get()
  async getShipments(@Res() res: Response) {
    const result = await this.ordersService.findAll();
    return res.send(result);
  }
  @Get(':id')
  async getShitment(@Param('id') id: any, @Res() res: Response) {
    const result = await this.ordersService.findOne(id);
    return res.send(result);
  }
  @Post()
  async createShipment(@Res() res: Response, @Body() createOrder: CreateOrder) {
    const createData = await this.ordersService.create(createOrder);
    return res.send(createData);
  }
  @Put(':id')
  async updateShipment(
    @Res() res: Response,
    @Body() updateOrder: UpdateOrder,
    @Param('id') id: number,
  ) {
    const updateData = await this.ordersService.update(id, updateOrder);
    return res.send(updateData);
  }
  @Delete(':id')
  async Deleteshipmet(@Param('id') id: number, @Res() res: Response) {
    const deleteData = await this.ordersService.delete(id);
    return res.send(deleteData);
  }
}
