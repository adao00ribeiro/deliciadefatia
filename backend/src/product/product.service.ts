import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ProductService {

  constructor(private readonly prisma: PrismaService) {

  }

  async create(createProductDto: CreateProductDto) {
    const product = await this.findOneByName(createProductDto.name);
    if (product) {
      throw new Error("Produto ja existe.")
    }
    return await this.prisma.product.create({
      data: createProductDto
    })
  }

  async findAll() {
    const list = await this.prisma.product.findMany();
    if (list.length == 0) {
      throw new Error("VAZIO")
    }
    return list;
  }
  async findOneByName(name: string) {
    return await this.prisma.product.findUnique({
      where: { name }
    })
  }
  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id }
    })
    if (!product) {
      throw new Error('Produto nao encontrado');
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {

    const product = await this.prisma.product.findUnique({
      where: { id }
    })
    if (!product) {
      throw new Error('Produto nao encontrado');
    }
    return await this.prisma.product.update({
      where: { id },
      data: updateProductDto
    })
  }

  async remove(id: string) {
    try {
      return await this.prisma.product.delete({
        where: { id }
      })
    } catch (error) {
      throw new Error("Nao Encontrado para delete")
    }
  }
}