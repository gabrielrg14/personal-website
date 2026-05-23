import { render, screen } from "@testing-library/react"
import { techListing } from "utils"

import { TechList } from "."

describe("<TechList />", () => {
    it("should not render list items when list is empty", () => {
        const { container } = render(<TechList list={[]} />)

        const techCards = container.querySelectorAll("li")
        expect(techCards).toHaveLength(0)
    })

    it("should render list items only for identifiers present in the list", () => {
        const techsToShow = ["html", "css", "javascript"]

        const { container } = render(<TechList list={techsToShow} />)

        const techCards = container.querySelectorAll("li")
        expect(techCards).toHaveLength(techsToShow.length)
    })

    it("should render list items with correct labels", () => {
        const techsToShow = ["html", "react", "typescript"]

        render(<TechList list={techsToShow} />)

        techsToShow.forEach((identifier) => {
            const tech = techListing.find((t) => t.identifier === identifier)
            expect(screen.getByText(tech!.label)).toBeInTheDocument()
        })
    })

    it("should not render list items for identifiers not in the list", () => {
        const { container } = render(
            <TechList list={["html", "css", "non-tech"]} />
        )

        const techCards = container.querySelectorAll("li")
        expect(techCards).toHaveLength(2)
    })
})
