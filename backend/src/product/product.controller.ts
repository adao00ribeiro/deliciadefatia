import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { diskStorage } from 'multer';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @IsPublic()
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: "./public/uploads",
      filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
      }
    })
  }))
  async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File) {
    const { originalname, filename: banner } = file;
    const product = { ...createProductDto, banner: banner }

    try {
      return await this.productService.create(product);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }

  }

  @Get()
  async findAll() {
    try {
      return await this.productService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.productService.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      return await this.productService.update(id, updateProductDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.productService.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
