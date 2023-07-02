import { Prisma } from "@prisma/client";
import { IsOptional, IsString } from "class-validator";

export class User implements Prisma.UserUncheckedCreateInput {
    id?: string;
    
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    password: string;

    created_at?: string | Date;
    updated_at?: string | Date;
}
