import { USERNAME } from "common"
import { userMock, repositoryMocks } from "test/mocks"

import { UserService } from "."

describe("UserService", () => {
    describe("getUser", () => {
        it("should throw an error when the searched user does not exist", async () => {
            await expect(UserService.getUser("not-a-user")).rejects.toThrow()
        })

        it("should return the user's main properties", async () => {
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
        it("should throw an error when the searched user does not exist", async () => {
            await expect(
                UserService.getStarredUserRepositories("not-a-user")
            ).rejects.toThrow()
        })

        it("should return the main properties of the repositories", async () => {
            const repositories =
                await UserService.getStarredUserRepositories(USERNAME)

            expect(repositories[0]).toHaveProperty("name")
            expect(repositories[0]).toHaveProperty("html_url")
            expect(repositories[0]).toHaveProperty("homepage")
            expect(repositories[0]).toHaveProperty("topics")
            expect(repositories[0]).toHaveProperty("description")
            expect(repositories[0]).toHaveProperty("owner")
        })

        it.each(repositoryMocks.arrayList)(
            "should return data from the %s repository",
            async (name, repository) => {
                const repositories =
                    await UserService.getStarredUserRepositories(USERNAME)

                const repositoryFoundByName = repositories.find(
                    (repository) => repository.name === name
                )

                expect(repositoryFoundByName).toStrictEqual(repository)
            }
        )

        it("should return a list of repositories including pokedex, travelTheWorld and tailwindInterfaces", async () => {
            const repositories =
                await UserService.getStarredUserRepositories(USERNAME)

            expect(repositories).toContainEqual(repositoryMocks.pokedex)
            expect(repositories).toContainEqual(repositoryMocks.travelTheWorld)
            expect(repositories).toContainEqual(
                repositoryMocks.tailwindInterfaces
            )
            expect(repositories).toStrictEqual(repositoryMocks.list)
        })
    })
})
