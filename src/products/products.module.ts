import { Module, ValidationPipe } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/Entities/product.entities';

@Module({
imports : [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ 
    {
        //For the validation
        provide : APP_PIPE ,
        useValue : new ValidationPipe({
            whitelist : true , 
            forbidNonWhitelisted : true ,
            transform : true ,
            transformOptions :{
                enableImplicitConversion : true ,
            }
        })
    },
    ProductsService]
})
export class ProductsModule {

}
