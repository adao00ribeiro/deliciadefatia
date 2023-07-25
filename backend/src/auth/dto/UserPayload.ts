export interface UserPayload {

    sub: string;
    email: string;
    name: string;
    jobtitle: string;
    iat?: number;
    exp?: number;
}