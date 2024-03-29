import { IUser, IRepository } from "interfaces"
import { Api } from "providers"

const getUser = (username: string) => Api.get<IUser>(`/${username}`)

const getStarredUserRepositories = async (username: string) => {
    const { status, data } = await Api.get<IRepository[]>(
        `/${username}/starred`
    )

    if (status !== 200) throw new Error()

    return data.filter((repo) => repo.owner.login === username)
}

export const UserService = {
    getUser,
    getStarredUserRepositories
}
