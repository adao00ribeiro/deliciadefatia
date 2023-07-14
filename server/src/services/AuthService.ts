import { IAuth } from "../interfaces/IAuth";
import { UserService } from "../services/User/UserService";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config()

export class AuthService {

    async execute({ email, password }: IAuth) {

        const serviceUser = new UserService();
        const user = await serviceUser.GetUser(email);

        if (!user) {
            throw new Error("Email nao existe");
        }
        const passwordMatch = await compare(password, user['password']);
        if (!passwordMatch) {
            throw new Error("Senha Incorreta");
        }
        console.log("aki")
        //gerar token
        const token = sign(
            {
                name: user['name'],
                email: user['email']
            },
            process.env.JWT_SECRET,
            {
                subject: user['id'],
                expiresIn: '30d'
            }
        )

        return {
            id: user['id'],
            name: user['name'],
            email: user['email'],
            token: token,
        }
    }


}