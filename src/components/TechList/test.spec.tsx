import { render, screen } from "@testing-library/react"

import { TechList } from "."

describe("<TechList />", () => {
    it("should render the passed children", () => {
        render(
            <TechList>
                <div data-testid="list">Test</div>
            </TechList>
        )

        expect(screen.getByTestId("list")).toBeInTheDocument()
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })
})
