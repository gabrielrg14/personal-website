import { create } from "zustand"

import IUser from "interfaces/IUser"

type UserStore = {
    user: IUser
    setUser: (user: IUser) => void
}

export const useStore = create<UserStore>()((set) => ({
    user: {},
    setUser: (user: IUser) => set(() => ({ user }))
}))
