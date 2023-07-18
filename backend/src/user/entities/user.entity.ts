import { Prisma } from "@prisma/client";

export class User implements Prisma.UserUncheckedCreateInput{
    id?: string;
    name: string;
    email: string;
    password: string;
    jobtitle?: string;
    avatarurl?: string;
    created_at?: string | Date;
    updated_at?: string | Date;
}
