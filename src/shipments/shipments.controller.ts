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
import { ShipmentsService } from './shipments.service';
import { Response } from 'express';
import { CreateShipment } from './dto/create-shipment.dto';
import { UpdateShipment } from './dto/update-shipment.dto';

@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  @Get()
  async getShipments(@Res() res: Response) {
    const result = await this.shipmentsService.findAll();
    return res.send(result);
  }
  @Get(':id')
  async getShitment(@Param('id') id: any, @Res() res: Response) {
    const result = await this.shipmentsService.findOne(id);
    return res.send(result);
  }

  @Post()
  async createShipment(
    @Res() res: Response,
    @Body() createshipment: CreateShipment,
  ) {
    const createData = await this.shipmentsService.create(createshipment);
    return res.send(createData);
  }

  @Put(':id')
  async updateShipment(
    @Res() res: Response,
    @Body() updateShipment: UpdateShipment,
    @Param('id') id: number,
  ) {
    const updateData = await this.shipmentsService.update(id, updateShipment);
    return res.send(updateData);
  }

  @Delete('id')
  async Deleteshipmet(@Param('id') id: number, @Res() res: Response) {
    const deleteData = await this.shipmentsService.delete(id);
    return res.send(deleteData);
  }
}
