import database from "../../database";
import { IOrderRequest } from "../../interfaces/IOrderRequest";

export class CreateOrderService {
    async execute({ table, name }: IOrderRequest) {
        return await new Promise<number>((resolve, reject) => {
            const sql = ""
            const param = [table, name];
            database.run(sql, param, (err: Error, id: number) => {
                if (err) {
                    reject(err)
                }
                resolve(id)
            });
        })
    }
}