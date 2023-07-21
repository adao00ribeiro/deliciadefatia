import { setCookie } from "nookies";
import { SignInProps } from "../../interfaces/SignInProps";
import { api } from "../apiClient";
import Router from "next/router";
import { toast } from "react-toastify"
import useUser from "../../Store/useUser";
export async function SignIn({ email, password }: SignInProps, setToken: (token) => void) {

    try {
        const response = await api.post('/auth/login', {
            email,
            password
        });
        const { access_token } = response.data;
        setToken(access_token);
        setCookie(undefined, '@nextauth.token', access_token, {
            maxAge: 60 * 60 * 24 * 30,// expira em 1 mes
            path: "/" //uais caminho terao acesso ao cookies / é todos

        })
        //passar para as proximas reuisios o token
        api.defaults.headers['Authorization'] = `Bearear ${access_token}`
        toast.success("Logado com sucesso");
        setTimeout(() => {
            Router.push("/dashboard/gerente");
        }, 500);

    } catch (e) {
        toast.error(e.response.data.message);
    }
}