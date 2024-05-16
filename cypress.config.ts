import { defineConfig } from "cypress"

export default defineConfig({
    projectId: "kq9se5",
    e2e: {
        baseUrl: "http://localhost:3000",
        video: true,
        env: {
            fullName: "Gabriel Rapucci Gonzalez"
        }
    }
})
