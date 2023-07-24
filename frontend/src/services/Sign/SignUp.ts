import { setCookie } from "nookies";
import { SignInProps } from "../../interfaces/SignInProps";
import { api } from "../apiClient";
import Router from "next/router";
import { toast } from "react-toastify"
import { SignUpProps } from "../../interfaces/SignUpProps";

export async function SignUp({ name, email, password }: SignUpProps) {
    try {        
        const response = await api.post('/user', {
            name,
            email,
            password
        })
        Router.push('/login')
    } catch (error) {
        console.log(error);
    }   
}