import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { createProductDto } from './dto/create-product.dto';
import { Roles } from 'src/auth/roles.decorators';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productService: ProductsService,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    create(@Body() dto: createProductDto) {
        return this.productService.create(dto);
    }

    @Get()
    findAll(
        @Query('category') category?: string,
        @Query('search') search?: string,
    ) {
        return this.productService.findAll(category, search);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.productService.findOne(Number(id));
    }
  
    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    update(
      @Param('id') id: string,
      @Body() body: any,
    ) {
      return this.productService.update(Number(id), body);
    }
  
    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    remove(@Param('id') id: string) {
      return this.productService.remove(Number(id));
    }
}
