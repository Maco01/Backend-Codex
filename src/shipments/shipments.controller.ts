import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('shipments')
export class ShipmentsController {
  @Get()
  getshipments() {
    return `todos los shipmets`;
  }
  @Get(':id')
  getshipment(@Param('id') id: number) {
    return `un shipment ${id}`;
  }

  @Post()
  createshipment(@Body() body: any) {
    return `${body}`;
  }
  @Put(':id')
  updateshipment(@Param('id') id: number, @Body() body: any) {
    return `${body} + ${id}`;
  }

  @Delete('id')
  Deleteshipmet(@Param('id') id: number) {
    return `shippment eliminado ${id}`;
  }
}
