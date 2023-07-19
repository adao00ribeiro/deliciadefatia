import { Prisma } from "@prisma/client";

export class Product implements Prisma.ProductUncheckedCreateInput {
    id?: string;
    name: string;
    price: string;
    description: string;
    banner: string;
    created_at?: string | Date;
    updated_at?: string | Date;
    category_id: string;
    items?: Prisma.ItemUncheckedCreateNestedManyWithoutProductInput;
}
