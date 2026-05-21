import { IUser, IRepository } from "interfaces"
import { api } from "providers"

const getUser = async (username: string): Promise<IUser> => {
    const { data } = await api.get<IUser>(`/${username}`)
    return data
}

const getStarredUserRepositories = async (
    username: string
): Promise<IRepository[]> => {
    const { data } = await api.get<IRepository[]>(`/${username}/starred`)
    return data.filter((repo) => repo.owner.login === username)
}

export const UserService = {
    getUser,
    getStarredUserRepositories
}
