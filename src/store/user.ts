import { create } from "zustand"

import { IUser } from "interfaces"

type UserStore = {
    user: IUser
    setUser: (user: IUser) => void
}

export const useUserStore = create<UserStore>()((set) => ({
    user: {},
    setUser: (user: IUser) => set(() => ({ user }))
}))
