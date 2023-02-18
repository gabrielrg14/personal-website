import { createContext } from "react";

export interface UserContextData {
    id: number | null,
    avatar_url: string,
    html_url: string,
    name: string,
    email: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
}

export const UserContext = createContext<UserContextData>({} as UserContextData)