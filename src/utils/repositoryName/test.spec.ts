import { formatRepositoryName } from "."

describe("repositoryName", () => {
    describe("formatRepositoryName", () => {
        it("should return Personal Website formatted when passing personal-website", () => {
            expect(formatRepositoryName("personal-website")).toBe(
                "Personal Website"
            )
        })

        it("should return Pokedex formatted when passing pokedex", () => {
            expect(formatRepositoryName("pokedex")).toBe("Pokedex")
        })

        it("should return Travel The World formatted when passing travel-the-world", () => {
            expect(formatRepositoryName("travel-the-world")).toBe(
                "Travel The World"
            )
        })
    })
})
