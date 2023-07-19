import { Prisma } from "@prisma/client";

export class order implements Prisma.OrderUncheckedCreateInput {
    id?: string;
    table: number;
    status?: boolean;
    drat?: boolean;
    name?: string;
    created_at?: string | Date;
    updated_at?: string | Date;
    items?: Prisma.ItemUncheckedCreateNestedManyWithoutOrderInput;
}
