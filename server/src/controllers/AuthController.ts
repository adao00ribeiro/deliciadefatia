import { Request, Response } from 'express'
import { AuthService } from '../services/AuthService'


export class AuthController {

    async handle(req: Request, res: Response) {
        const { email, password } = req.body
        const service = new AuthService();
        return res.json(await service.execute({ email, password }))
    }

}