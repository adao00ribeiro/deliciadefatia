import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
   
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateUserDto) {
    return this.prisma.user.create({
      data
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where:{id},
    })
  }

  update(id: string, data: UpdateUserDto) {
    return this.prisma.user.update({
      where:{id},
      data
    })
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where:{id},
    })
  }
}
