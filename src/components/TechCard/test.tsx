import { render, screen } from "@testing-library/react"

import TechCard from "."
import { Testinglibrary } from "@styled-icons/simple-icons/"

describe("<TechCard />", () => {
    it("should render label and svg icon", () => {
        const { container } = render(
            <TechCard label="Test" icon={<Testinglibrary />} />
        )

        expect(screen.getByText(/test/i)).toBeInTheDocument()
        expect(container.querySelector("div > svg > path")).toBeInTheDocument()
    })
})
