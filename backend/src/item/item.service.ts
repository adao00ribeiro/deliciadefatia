import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemService {
  constructor(private readonly prisma: PrismaService) {

  }
  async create(createItemDto: CreateItemDto) {
    //procurar order
    const order = await this.prisma.order.findUnique({
      where: { id: createItemDto.order_id }
    })
    const product = await this.prisma.product.findUnique({
      where: { id: createItemDto.product_id }
    })
    if (!order || !product) {
      throw new Error("Pedido ou Produto nao encontrado")
    }

    return await this.prisma.item.create({
      data: createItemDto
    })
  }

  async findAll() {
    const list = await this.prisma.item.findMany();
    if (list.length == 0) {
      throw new Error('vazio');
    }
    return list;
  }

  async findOne(id: string) {
    return `This action returns a #${id} item`;
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  async remove(id: string) {
    return `This action removes a #${id} item`;
  }
}
