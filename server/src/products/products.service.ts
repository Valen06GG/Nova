import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { createProductDto } from './dto/create-product.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
    constructor(
      @InjectRepository(Product)
      private readonly productRepository: Repository<Product>,
    ) {}

    create(dto: createProductDto) {
        const product = this.productRepository.create(dto);
        return this.productRepository.save(product);
    }

    findAll(category?: string, search?: string) {
        const query = this.productRepository.createQueryBuilder('product');

        if (category) { 
            query.andWhere('product.category = :category', { category });
        }

        if (search) {
            query.andWhere('product.title ILIKE :search', {
                search: `%${search}%`,
            });
        }

        return query.getMany();
    }

    async findOne(id: number) {
        const product = await this.productRepository.findOne({
            where: { id },
        });

        if (!product) {
            throw new NotFoundException('Product not found');
        }

        return product;
    }

    async update(id: number, data: Partial<Product>) {
        await this.findOne(id);
        await this.productRepository.update(id, data);
        return this.findOne(id);
    }

    async remove(id: number) {
        await this.findOne(id);
        await this.productRepository.delete(id);
        return { message: 'Product deleted successfully' };
    }
}
