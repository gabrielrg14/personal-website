import { IUser, IRepository } from "interfaces"
import { Api } from "providers"

const getUser = async (username: string) => {
    const { data } = await Api.get<IUser>(`/${username}`)
    return data
}

const getStarredUserRepositories = async (username: string) => {
    const { data } = await Api.get<IRepository[]>(`/${username}/starred`)
    return data.filter((repo) => repo.owner.login === username)
}

export const UserService = {
    getUser,
    getStarredUserRepositories
}
