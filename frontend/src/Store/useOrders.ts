import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IUser } from '../interfaces/IUser';
interface IOrderProps {
    orders: [];
    setOrders: (orders: []) => void;
}

const useOrders = create(persist<IOrderProps>(
    (set, get) => ({
        orders: undefined,
        setOrders: (orders: []) => {
            set(() => (
                {
                    orders: orders
                }
            ));
        },
    }),
    {
        name: 'orders-storage', // unique name
    }
))

export default useOrders;