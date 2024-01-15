import { IUser } from "interfaces"

export interface IRepository {
    id: number
    name: string
    description: string
    language: string
    homepage: string
    topics: string[]
    owner: IUser
    html_url: string
    tags_url: string
    created_at: Date
}
