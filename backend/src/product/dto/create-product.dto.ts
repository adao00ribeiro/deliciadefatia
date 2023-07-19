import { Prisma } from "@prisma/client";
import { Product } from "../entities/product.entity";
import { IsString } from "class-validator";

export class CreateProductDto extends Product {
    id?: string;
    @IsString()
    name: string;
    @IsString()
    price: string;
    @IsString()
    description: string;
    @IsString()
    banner: string;
    created_at?: string | Date;
    updated_at?: string | Date;
    @IsString()
    category_id: string;
    items?: Prisma.ItemUncheckedCreateNestedManyWithoutProductInput;
}
