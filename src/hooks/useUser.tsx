import { useCallback } from "react"

import { useUserStore } from "store"
import { UserService } from "services"

export const useUser = () => {
    const { user, setUser } = useUserStore()

    const setUserStore = useCallback(
        async (username: string) => {
            const { status, data } = await UserService.getUser(username)
            if (status !== 200) throw new Error()
            setUser(data)
        },
        [setUser]
    )

    return {
        user,
        setUserStore
    }
}
