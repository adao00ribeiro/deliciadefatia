import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";

import SignOut from "../services/Sign/SignOut";
import { AuthTokenError } from "../services/errors/AuthTokenError";

export const useApi = (ctx = undefined) => {

    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    })
    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if (error.response.status === 401) {
            //deslogar
            if (typeof window !== undefined) {
                SignOut();
            } else {
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(error);
    })

    return api;

}