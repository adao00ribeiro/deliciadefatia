import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {

  constructor(private readonly prisma: PrismaService) {

  }

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.findOneByName(createCategoryDto.name);
    if (category) {
      throw new Error('Categoria ja existe.');
    }
    return this.prisma.category.create({
      data: createCategoryDto
    });
  }

  async findAll() {
    const list = await this.prisma.category.findMany();
    if (list.length == 0) {
      throw new Error('Dados nao encontrado');
    }
    return list;
  }
  async findOneByName(name: string) {
    return this.prisma.category.findUnique({
      where: { name }
    });
  }
  findOne(id: string) {
    return this.prisma.category.findUnique({
      where: { id }
    });
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: string) {
    return `This action removes a #${id} category`;
  }
}
