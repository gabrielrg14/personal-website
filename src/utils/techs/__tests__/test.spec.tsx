import {
    knowledgeTechs,
    knownTechs,
    potentialTechs,
    studyingTechs,
    techListing
} from "utils"

describe("techs", () => {
    describe("knowledgeTechs", () => {
        it("should match snapshot", () => {
            expect(knowledgeTechs).toMatchSnapshot()
        })

        it("should have a length greater than 0", () => {
            expect(knowledgeTechs.length).toBeGreaterThan(0)
        })
    })

    describe("knownTechs", () => {
        it("should match snapshot", () => {
            expect(knownTechs).toMatchSnapshot()
        })

        it("should have a length greater than 0", () => {
            expect(knownTechs.length).toBeGreaterThan(0)
        })
    })

    describe("potentialTechs", () => {
        it("should match snapshot", () => {
            expect(potentialTechs).toMatchSnapshot()
        })

        it("should have a length greater than 0", () => {
            expect(potentialTechs.length).toBeGreaterThan(0)
        })
    })

    describe("studyingTechs", () => {
        it("should match snapshot", () => {
            expect(studyingTechs).toMatchSnapshot()
        })

        it("should have a length greater than 0", () => {
            expect(studyingTechs.length).toBeGreaterThan(0)
        })
    })

    describe("techListing", () => {
        it("should have a length greater than 0 and contain the icon, label and identifier properties", () => {
            expect(techListing.length).toBeGreaterThan(0)
            expect(techListing[0]).toHaveProperty("icon")
            expect(techListing[0]).toHaveProperty("label")
            expect(techListing[0]).toHaveProperty("identifier")
        })
    })
})
