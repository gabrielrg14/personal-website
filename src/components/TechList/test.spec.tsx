import { render, screen } from "@testing-library/react"

import { TechList } from "."

describe("<TechList />", () => {
    it("should render a list, list item and the passed children", () => {
        render(
            <TechList>
                <li data-testid="item">Test</li>
            </TechList>
        )

        expect(screen.getByRole("list")).toBeInTheDocument()
        expect(screen.getByRole("listitem")).toBeInTheDocument()
        expect(screen.getByTestId(/item/i)).toBeInTheDocument()
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })
})
