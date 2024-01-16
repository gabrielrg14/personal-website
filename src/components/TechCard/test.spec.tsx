import { render, screen } from "@testing-library/react"
import { Jest, Testinglibrary } from "@styled-icons/simple-icons/"

import { TechCard } from "."

describe("<TechCard />", () => {
    it("should render the jest label and svg icon", () => {
        const { container } = render(<TechCard label="Jest" icon={<Jest />} />)

        expect(screen.getByText(/jest/i)).toBeInTheDocument()
        expect(container.querySelector("div > svg > path")).toBeInTheDocument()
    })

    it("should render the testing library label and svg icon", () => {
        const { container } = render(
            <TechCard label="Testing Library" icon={<Testinglibrary />} />
        )

        expect(screen.getByText(/testing library/i)).toBeInTheDocument()
        expect(container.querySelector("div > svg > path")).toBeInTheDocument()
    })
})
