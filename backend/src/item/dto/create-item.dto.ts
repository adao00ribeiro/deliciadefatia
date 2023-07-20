import { IsNumber, IsString } from "class-validator";
import { Item } from "../entities/item.entity";

export class CreateItemDto implements Item {
    id?: string;
    @IsNumber()
    amount: number;
    created_at?: string | Date;
    updated_at?: string | Date;
    @IsString()
    order_id: string;
    @IsString()
    product_id: string;
}
