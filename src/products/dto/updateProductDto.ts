import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "./createProductDto.dto";


export class UpdateProductDto extends PartialType(CreateProductDto){}