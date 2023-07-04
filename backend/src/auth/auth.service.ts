import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
    login(user: User) {
        throw new Error('Method not implemented.');
    }
    validateUser(email: string, password: string) {
        throw new Error('Method not implemented.');
    }
}
