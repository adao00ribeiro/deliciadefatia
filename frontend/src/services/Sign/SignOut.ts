import Router from "next/router";
import { destroyCookie } from "nookies";

export default () => {
    try {
        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')
    } catch {
        console.log('erro ao deslogar');

    }
}
