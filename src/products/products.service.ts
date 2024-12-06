import { Injectable, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/Entities/product.entities';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/createProductDto.dto';
import { UpdateProductDto } from './dto/updateProductDto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>, //Instance InjectRepository
    ){}

    async findAll(){
        return await this.productRepository.find();
    }
    async find(id : number){
        const product = await this.productRepository.findOne(
            {
                where : {
                    id
                }
            }
        )

        if(!product) throw new NotFoundException() // if product is null 

        return product;    
    }

    async update(id : number , newproduct : UpdateProductDto){
        return await this.productRepository.update({id} ,newproduct)
    }
    
    async create(product: CreateProductDto ){
        return await this.productRepository.save(product);
    }
    async delete(id : number){
        return await this.productRepository.delete(id)
    }
}
