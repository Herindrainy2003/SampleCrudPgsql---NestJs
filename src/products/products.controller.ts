import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/createProductDto.dto';
import { param } from './dto/param.dto';
import { UpdateProductDto } from './dto/updateProductDto';

@Controller('products')
export class ProductsController {
    constructor(private ProductService: ProductsService){}  //Instance the service injectable


    @Get()
    findAll(){
        return this.ProductService.findAll();
    }

    @Get(":id")
    find(
        @Param() {id} : param, //verify validation the param
    ){
        return this.ProductService.find(id);
    }

    @Post()
    create(
        @Body() product : CreateProductDto
    ){
        return this.ProductService.create(product);
    }
    @Patch(":id")
    update(
        @Param() {id} : param,
        @Body() newproduct : UpdateProductDto
    ){
        return this.ProductService.update(id, newproduct);
    }

    @Delete(":id")
    delete(
        @Param() {id} : param,
    ){
        return this.ProductService.delete(id);
    }
}
