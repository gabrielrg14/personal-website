import { render, screen } from "@testing-library/react"

import { TechList } from "."

describe("<TechList />", () => {
    it("should render the passed children", () => {
        render(
            <TechList>
                <ul data-testid="list">
                    <li>Test</li>
                </ul>
            </TechList>
        )

        expect(screen.getByRole("list")).toBeInTheDocument()
        expect(screen.getByRole("listitem")).toBeInTheDocument()
        expect(screen.getByTestId(/list/i)).toBeInTheDocument()
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })
})
