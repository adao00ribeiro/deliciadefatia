import { Request, response, Response } from "express"
import { IUser } from "../interfaces/IUser";
import { DetailUserService } from "../services/User/DetailUserService";
import { UserService } from "../services/User/UserService";

export class UserController {
    async CreateHandle(req: Request, res: Response) {
        const { email, name, password } = req.body;
        const service = new UserService();
        return res.json(await service.CreateUser({ name, email, password }));
    }
    async handleGetUser(req: Request, res: Response) {

        const email = req.params.email
        const service = new UserService();
        return res.json(await service.GetUser(email));
    }

    async DetailHandle(req: Request, res: Response) {
        const userid = req.user_id;
        const service = new DetailUserService();
        const user = await service.execute(userid);
        return res.json(user);
    }

    async ListHandle(req: Request, res: Response) {
        const service = new UserService();
        return res.json(await service.GetAllUser());
    }
}