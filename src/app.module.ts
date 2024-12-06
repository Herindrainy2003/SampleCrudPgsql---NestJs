import { Module, ValidationPipe } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'dbConfig';

@Module({
  imports: [ProductsModule , TypeOrmModule.forRoot(dbConfig)],  //importation the dbconfig and products module
})


export class AppModule {}
