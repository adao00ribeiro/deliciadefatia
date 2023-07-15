import { setCookie } from "nookies";
import { SignInProps } from "../../interfaces/SignInProps";
import { api } from "../apiClient";
import Router from "next/router";

async function signIn({ email, password }: SignInProps) {

    try {
        const response = await api.post('/session', {
            email,
            password
        });
        const { id, name, token } = response.data;
        setCookie(undefined, '@nextauth.token', token, {
            maxAge: 60 * 60 * 24 * 30,// expira em 1 mes
            path: "/" //uais caminho terao acesso ao cookies / é todos

        })

        //setUser({ id, name, email });
        //passar para as proximas reuisios o token
        api.defaults.headers['Authorization'] = `Bearear ${token}`

        // toast.success("Logado com sucesso");

        console.log("aki");

        //
        Router.push('/dashboard');

    } catch (erro) {
        //toast.error(erro.message);
    }
}