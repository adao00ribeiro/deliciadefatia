import { RunResult } from "sqlite3";
import database from "../../database";

export class ListCategoryService{

    async execute() {
        return new Promise<RunResult>((resolve,reject)=>{
            const sql = "select id,name from Category";
            const params : RunResult[] = []
            database.get(sql, params, function (_err: Error, row?: RunResult) {
                if (_err) {
                    reject(_err)
                }
                resolve(row )
            })
        })
    }
}
