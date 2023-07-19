import { Prisma } from "@prisma/client";

export class implementsm implements Prisma.ItemUncheckedCreateInput {
    id?: string;
    amount: number;
    created_at?: string | Date;
    updated_at?: string | Date;
    order_id: string;
    product_id: string;
}
