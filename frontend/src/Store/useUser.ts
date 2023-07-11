import { create } from 'zustand'
import { persist } from 'zustand/middleware'
type UserProps = {
    email: string,
    password: string,

}

const useUser = create(persist<UserProps>(
    (set, get) => ({
        email: 'asdasd',
        password: undefined
    }),
    {
        name: 'user-storage', // unique name
    }
))

export default useUser;