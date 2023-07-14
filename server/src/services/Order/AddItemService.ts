import { RunResult } from "sqlite3";
import database from "../../database";
import { IItemRequest } from "../../interfaces/IItemRequest";

export class AddItemService {
    async execute({ order_id, product_id, amount }: IItemRequest) {
        return await new Promise<number>((resolve, reject) => {

            const sql = 'insert';
            const params = [order_id, product_id, amount]

            database.run(sql, params, (err: Error, row: RunResult) => {
                if (err) {
                    reject(err)
                }
                resolve(row.lastID)
            })
        })
    }
}