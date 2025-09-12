import { IUser } from "interfaces"

export interface IRepository {
    id: number
    name: string
    html_url: string
    homepage: string
    topics: string[]
    description: string
    owner: IUser
}
