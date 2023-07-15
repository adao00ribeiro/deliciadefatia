import Router from "next/router";
import { destroyCookie } from "nookies";

export function sighOut() {
    try {
        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')
    } catch {
        console.log('erro ao deslogar');

    }
}
