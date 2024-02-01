import { render, screen } from "@testing-library/react"

import { Main } from "components"

describe("<Main />", () => {
    it("should render the main element and the passed children", () => {
        render(
            <Main>
                <div data-testid="page">Test</div>
            </Main>
        )

        expect(screen.getByRole("main")).toBeInTheDocument()
        expect(screen.getByTestId(/page/i)).toBeInTheDocument()
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })
})
