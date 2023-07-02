import { User } from "../entities/user.entity";

export class CreateUserDto extends User{
    id?: string;
    name: string;
    email: string;
    password: string;
    created_at?: string | Date;
    updated_at?: string | Date;
}
