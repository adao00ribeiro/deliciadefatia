import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createOrderDto: CreateOrderDto) {
    return await this.prisma.order.create({
      data: createOrderDto
    });
  }

  async findAll() {
    const list = await this.prisma.order.findMany(
      {
        include: {
          items: {
            include: {
              product: true
            }
          }
        }
      }
    );
    if (list.length == 0) {
      throw new Error('Vazio');
    }
    return list
  }

  async findOne(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });
    if (!order) {
      throw new Error('Nao Encontrado');
    }
    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return "update ";
  }

  async remove(id: string) {

    const order = await this.prisma.order.findUnique({
      where: { id }
    });
    if (!order) {
      throw new Error("nao encontrado")
    }

    return this.prisma.order.delete({
      where: { id }
    });
  }
}
