import { api } from "../apiClient";

export default async ()=>{
    try{
        const responseUser = await api.get('/profile');
        return responseUser.data;
    }catch(error){
        throw error
    }
}