import { Product } from "src/Entities/product.entities";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const dbConfig : PostgresConnectionOptions = {
    host : host,
    port : 5432,
    username : your username,
    password : your password,
    database : your data base,
    type : 'postgres',
    entities : [__dirname + '/**/*.entities{.ts,.js}'],
    synchronize : true,

}
