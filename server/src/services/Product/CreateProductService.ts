import { v4 as uuidv4 } from "uuid";
import database from "../../database";
import { IProductRequest } from "../../interfaces/IProductRequest";
export class CreateProductService {

    async execute({ category_id, name, price, description, banner }  : IProductRequest) {
        return new Promise<number>((resolve, reject) => {
            const sql = `INSERT INTO Products ( id,category_id,name,price,description,banner) VALUES(?,?,?,?,?,?);`
            const param = [uuidv4(), category_id, name, price, description, banner]
            database.run(sql, param, (err: Error, id: number) => {
                if (err) {
                    reject(err)
                }
                resolve(id);
            });
        })
    }
}