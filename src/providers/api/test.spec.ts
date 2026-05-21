import { api } from "."

describe("api", () => {
    it("should export an axios instance", () => {
        expect(api).toBeDefined()
    })

    it("should have the correct baseURL configured", () => {
        expect(api.defaults.baseURL).toBe("https://api.github.com/users")
    })

    it("should have Authorization header with github token", () => {
        const authHeader = api.defaults.headers["Authorization"]

        expect(authHeader).toBeDefined()
        expect(authHeader).toBe(`Bearer ${process.env.NEXT_PUBLIC_GH_TOKEN}`)
    })

    it("should create an axios instance with api methods", () => {
        expect(typeof api.get).toBe("function")
        expect(typeof api.post).toBe("function")
        expect(typeof api.put).toBe("function")
        expect(typeof api.delete).toBe("function")
        expect(typeof api.patch).toBe("function")
    })
})
