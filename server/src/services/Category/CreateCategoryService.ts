import { RunResult } from "sqlite3"
import database from "../../database";
import { v4 as uuidv4 } from 'uuid';



export class CreateCategoryService{
    async execute(name: string) {
        return await new Promise<RunResult>((resolve,reject) =>{
            const sql = "INSERT INTO Category (id,name) VALUES (?,?)";
            const params = [uuidv4(),name]
            database.get(sql, params, function (_err: Error, row?: RunResult) {
                if (_err) {
                    reject(_err)
                }
                resolve(row )
            })
        })
    }
}