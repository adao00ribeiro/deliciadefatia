import { Prisma } from "@prisma/client";
import { order } from "../entities/order.entity";
import { IsNumber, IsString, IsOptional } from "class-validator";

export class CreateOrderDto extends order {
    id?: string;
    @IsNumber()
    table: number;//numero da mesa
    status?: boolean;
    drat?: boolean;
    @IsString()
    @IsOptional()
    name?: string;//nome do cliente
    created_at?: string | Date;
    updated_at?: string | Date;
    items?: Prisma.ItemUncheckedCreateNestedManyWithoutOrderInput;
}
