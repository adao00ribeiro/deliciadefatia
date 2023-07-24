import { toast } from "react-toastify";
import { api } from "../apiClient";
import { IProduct } from "../../interfaces/IProduct";


export default async (categoria: IProduct) => {
    try {
        const response = await api.post('/product', {name:categoria});
        toast.success(response.data.name +' registrado');
    } catch (e) {
        toast.error(e.response.data.message);
    }
}