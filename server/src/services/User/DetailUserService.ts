import { RunResult } from "sqlite3";
import { UserService } from "../User/UserService"


export class DetailUserService{

async execute(userid:string){
    console.log(userid);
    const Service = new UserService();
    const user = Service.GetUserById<RunResult>(userid);
    return user;
}

}