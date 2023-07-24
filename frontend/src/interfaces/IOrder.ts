import { IItem } from "./ITem";

export interface IOrder {
    id: string;
    table: number;//numero da mesa
    status?: boolean;
    drat?: boolean;
    name?: string;//nome do cliente
    created_at?: string | Date;
    updated_at?: string | Date;
    items: IItem[]
}