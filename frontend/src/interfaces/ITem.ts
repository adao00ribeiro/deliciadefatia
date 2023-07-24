import { IProduct } from "./IProduct";

export interface IItem {
    id?: string;
    amount: number;
    created_at?: string | Date;
    updated_at?: string | Date;
    order_id: string;
    product_id: string;
    product: IProduct
}