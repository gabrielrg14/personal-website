import { experiences } from "utils"

describe("timelines", () => {
    describe("experiences", () => {
        it("should match snapshot", () => {
            expect(experiences).toMatchSnapshot()
        })

        it("should have a length greater than 0", () => {
            expect(experiences.length).toBeGreaterThan(0)
        })

        it("should contain all properties", () => {
            expect(experiences[0]).toHaveProperty("title")
            expect(experiences[0]).toHaveProperty("company")
            expect(experiences[0]).toHaveProperty("period")
            expect(experiences[0]).toHaveProperty("description")
            expect(experiences[0]).toHaveProperty("skills")
        })

        it("should have the skills property with a length greater than 0", () => {
            expect(experiences[0].skills.length).toBeGreaterThan(0)
        })
    })
})
