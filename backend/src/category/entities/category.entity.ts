import { Prisma } from "@prisma/client";

export class Category implements Prisma.CategoryUncheckedCreateInput {
    id?: string;
    name: string;
    created_at?: string | Date;
    updated_at?: string | Date;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutCategoryInput;
}
