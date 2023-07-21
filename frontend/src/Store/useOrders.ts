import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IUser } from '../interfaces/IUser';
interface IUserProps {
    orders: [];
    setOrders: (orders: []) => void;
}

const useOrders = create(persist<IUserProps>(
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