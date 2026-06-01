import { render, screen } from "@testing-library/react"
import { techMocks } from "test/mocks"

import { TechList } from "."

jest.mock("utils/techs/listing", () => ({
    techListing: techMocks.techListing
}))

describe("<TechList />", () => {
    it("should not render list items when list is empty", () => {
        const { container } = render(<TechList list={[]} />)

        const techCards = container.querySelectorAll("li")
        expect(techCards).toHaveLength(0)
    })

    it("should render list items with correct label", () => {
        const techList = techMocks.known

        render(<TechList list={techList} />)

        techList.forEach((identifier) => {
            const tech = techMocks.techListing.find(
                (t) => t.identifier === identifier
            )
            expect(screen.getByText(tech!.label)).toBeInTheDocument()
        })
    })

    it("should render list items only for identifiers in the list", () => {
        const { container } = render(<TechList list={techMocks.known} />)

        const techCards = container.querySelectorAll("li")
        expect(techCards).toHaveLength(techMocks.known.length)
    })

    it("should not render list items for identifiers not in the list", () => {
        const { container } = render(<TechList list={["non-tech"]} />)

        const techCards = container.querySelectorAll("li")
        expect(techCards).toHaveLength(0)
    })
})
