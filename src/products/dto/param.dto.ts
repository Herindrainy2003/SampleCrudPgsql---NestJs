import { IsInt, IsPositive } from "class-validator";


export class param {

    @IsInt({message : "Your ID is not a number"})
    @IsPositive({message : "your id is not positive"})
    id : number;
}