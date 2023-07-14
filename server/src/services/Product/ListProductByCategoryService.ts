import { RunResult } from "sqlite3";
import database from "../../database";

export class ListProductByCategoryService{

    async execute(idCategory:number) {

        return new Promise<RunResult[]>((resolve,reject)=>{
            const sql = "select * from Product where category_id = ?";
            const params  = [idCategory]

            database.get(sql, params, function (_err: Error, row?: RunResult[]) {
                if (_err) {
                    reject(_err)
                }
                resolve(row )
            })
        })
    }
}
