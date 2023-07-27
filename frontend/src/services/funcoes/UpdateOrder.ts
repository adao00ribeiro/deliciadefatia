import { IOrder } from "../../interfaces/IOrder";
import { api } from "../apiClient";

export default async (order : IOrder ) => {
    try {
        const responseOrders = await api.patch(`/order/${order.id}`,{
            table: order.table,
            status: order.status,
            drat: order.drat,
            name: order.name
        });
        console.log(responseOrders.data)
        return responseOrders.data;
    } catch (error) {
        throw error;
    }
}