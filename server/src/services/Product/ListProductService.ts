import { RunResult } from "sqlite3"
import database from "../../database";


export class LIstProductService{

    async execute(){
        return await new Promise<RunResult[]> ((resolve , reject)=>{

            const sql = "select * from Products";
            const params : RunResult[] = []
            database.get(sql, params, function (_err: Error, row?: RunResult[]) {
                if (_err) {
                    reject(_err)
                }
                resolve(row )
            })



        })
    }




}