import { USERNAME } from "common"
import { userMock, repositoryMocks } from "test/mocks"

import { UserService } from "."

describe("UserService", () => {
    describe("getUser", () => {
        it("should return user main properties", async () => {
            const user = await UserService.getUser(USERNAME)

            expect(user).toHaveProperty("avatar_url")
            expect(user).toHaveProperty("name")
            expect(user).toHaveProperty("bio")
            expect(user).toHaveProperty("company")
            expect(user).toHaveProperty("location")
        })

        it("should return user data", async () => {
            const user = await UserService.getUser(USERNAME)

            expect(user).toStrictEqual(userMock.user)
        })
    })

    describe("getStarredUserRepositories", () => {
        it("should return repository main properties", async () => {
            const repositories =
                await UserService.getStarredUserRepositories(USERNAME)

            expect(repositories[0]).toHaveProperty("name")
            expect(repositories[0]).toHaveProperty("html_url")
            expect(repositories[0]).toHaveProperty("homepage")
            expect(repositories[0]).toHaveProperty("topics")
            expect(repositories[0]).toHaveProperty("description")
            expect(repositories[0]).toHaveProperty("owner")
        })

        it("should return repository data", async () => {
            const repositories =
                await UserService.getStarredUserRepositories(USERNAME)

            expect(repositories[0]).toStrictEqual(repositoryMocks.repository1)
        })

        it("should return a list of repositories with repository1 and repository2", async () => {
            const repositories =
                await UserService.getStarredUserRepositories(USERNAME)

            expect(repositories).toContainEqual(repositoryMocks.repository1)
            expect(repositories).toContainEqual(repositoryMocks.repository2)
            expect(repositories).toStrictEqual(repositoryMocks.list)
        })
    })
})
