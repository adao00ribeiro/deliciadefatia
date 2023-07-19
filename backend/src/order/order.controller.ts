import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { OrderService } from './order.service';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    try {
      return await this.orderService.create(createOrderDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.orderService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }

  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.orderService.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }

  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    try {
      return await this.orderService.update(id, updateOrderDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }

  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.orderService.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
