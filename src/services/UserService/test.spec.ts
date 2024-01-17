import { USERNAME } from "common"
import { userMock, repositoryMocks } from "test/mocks"

import { UserService } from "."

describe("UserService", () => {
    describe("getUser", () => {
        it("should return user data with its main properties", async () => {
            const { data } = await UserService.getUser(USERNAME)

            expect(data).toHaveProperty("login")
            expect(data).toHaveProperty("avatar_url")
            expect(data).toHaveProperty("name")
            expect(data).toHaveProperty("company")
            expect(data).toHaveProperty("location")
            expect(data).toHaveProperty("bio")
            expect(data).toStrictEqual(userMock.user)
        })
    })

    describe("getStarredUserRepositories", () => {
        it("should return repository data with its main properties", async () => {
            const repositories =
                await UserService.getStarredUserRepositories(USERNAME)

            expect(repositories[0]).toHaveProperty("html_url")
            expect(repositories[0]).toHaveProperty("name")
            expect(repositories[0]).toHaveProperty("topics")
            expect(repositories[0]).toHaveProperty("homepage")
            expect(repositories[0]).toHaveProperty("description")
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
