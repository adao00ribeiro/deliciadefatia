import { Prisma } from "@prisma/client";
import { Category } from "../entities/category.entity";
import { IsString } from "class-validator";

export class CreateCategoryDto extends Category {

    @IsString()
    name: string;
    created_at?: string | Date;
    updated_at?: string | Date;
}
