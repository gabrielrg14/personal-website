import axios from "axios"

const baseURL = "https://api.github.com/users"

export const Api = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GH_TOKEN}` }
})
