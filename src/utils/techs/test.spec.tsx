import {
    knowledgeTechs,
    knownTechs,
    potentialTechs,
    studyingTechs,
    techProjects
} from "."

describe("techs", () => {
    describe("knowledgeTechs", () => {
        it("should have a length greater than 0 and contain the icon and label properties", () => {
            expect(knowledgeTechs.length).toBeGreaterThan(0)
            expect(knowledgeTechs[0]).toHaveProperty("icon")
            expect(knowledgeTechs[0]).toHaveProperty("label")
        })
    })
    describe("knownTechs", () => {
        it("should have a length greater than 0 and contain the icon and label properties", () => {
            expect(knownTechs.length).toBeGreaterThan(0)
            expect(knownTechs[0]).toHaveProperty("icon")
            expect(knownTechs[0]).toHaveProperty("label")
        })
    })
    describe("potentialTechs", () => {
        it("should have a length greater than 0 and contain the icon and label properties", () => {
            expect(potentialTechs.length).toBeGreaterThan(0)
            expect(potentialTechs[0]).toHaveProperty("icon")
            expect(potentialTechs[0]).toHaveProperty("label")
        })
    })
    describe("studyingTechs", () => {
        it("should have a length greater than 0 and contain the icon and label properties", () => {
            expect(studyingTechs.length).toBeGreaterThan(0)
            expect(studyingTechs[0]).toHaveProperty("icon")
            expect(studyingTechs[0]).toHaveProperty("label")
        })
    })
    describe("techProjects", () => {
        it("should have a length greater than 0 and contain the icon, label and identifier properties", () => {
            expect(techProjects.length).toBeGreaterThan(0)
            expect(techProjects[0]).toHaveProperty("icon")
            expect(techProjects[0]).toHaveProperty("label")
            expect(techProjects[0]).toHaveProperty("identifier")
        })
    })
})
