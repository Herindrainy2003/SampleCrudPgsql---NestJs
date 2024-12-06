import { IsNumber, IsPositive, IsString, Length } from "class-validator";


export class CreateProductDto{
    
    @IsString()
    @Length(5,10 , {message: "Verify the length of the product"})
    name : string;

    @IsNumber()
    @IsPositive({message: "Make your price in postive please"})
    price : number;
}