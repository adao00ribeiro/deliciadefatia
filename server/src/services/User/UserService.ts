import { Database, RunResult, Statement } from 'sqlite3';
import database from '../../database'
import { IUser } from '../../interfaces/IUser'
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcryptjs'
export class UserService {
    async CreateUser({ email, name, password }: IUser) {

        if (!email) {
            throw new Error("Email Incorrect");
        }

        if (await this.ExistUser(email)) {
            throw new Error("Email Exist");
        }
        const hashpassword = await hash(password, 8);
        return await new Promise<Number>((resolve, reject) => {
            const sql = "INSERT INTO User (id,email,name,password) VALUES (?,?, ?, ?)";

            const params = [uuidv4(), email, name, hashpassword]
            database.run(sql, params, function (this: RunResult, _err: Error) {
                if (_err) {
                    reject(_err)
                }
                console.log(this.lastID);

                resolve(this?.lastID)
            })
        })
    }
    async ExistUser(email: string) {

        return await new Promise<boolean>((resolve, reject) => {
            const sql = "select email, name from User where email = ?"
            const params = [email]
            database.get(sql, params, function (_err: Error, row?: IUser) {
                if (_err) {
                    reject(_err)
                }
                resolve(row !== undefined)
            })
        })
    }


    async GetUser(email: string) {
        const sql = "select id, email, name, password from User where email = ?"
        const params = [email]
        return await new Promise<RunResult>((resolve, reject) => {
            database.get(sql, params, function (_err: Error, row: RunResult) {
                if (_err) {
                    reject(_err)
                }
                if (row) {
                    resolve(row)
                } else {
                    reject(new Error("nao existe"))
                }
            })
        })
    }
    async GetUserById<T>(id: string) {
        const sql = "select id, email, name from User where id = ?"
        const params = [id]
        return await new Promise<T>((resolve, reject) => {
            database.get(sql, params, function (_err: Error, row: T) {
                if (_err) {
                    reject(_err)
                }
                if (!row) {
                    reject(new Error("nao existe ID"))
                }
                resolve(row)
            })
        })
    }
    async GetAllUser() {

        return await new Promise<RunResult[]>((resolve, reject) => {
            const sql = "select id, email, name  from User"
            const params: IUser[] = []
            database.all(sql, params, (_err: Error, rows: RunResult[]) => {
                if (_err) {
                    reject(_err);
                }
                resolve(rows);
            })
        })
    }
}


