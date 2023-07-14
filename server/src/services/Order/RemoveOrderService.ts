import { RunResult } from "sqlite3"
import database from "../../database"

export class RemoveOrderService {
    async execute(id: string) {
        return await new Promise<boolean>((resolve, reject) => {
            const sql = 'DELETE FROM Order WHERE id = ?'
            const params = [id]
            database.run(sql, params, (err: Error, row: RunResult) => {
                if (err) {
                    reject(err)
                }
                resolve(row.changes === 0)
            })
        })
    }
}