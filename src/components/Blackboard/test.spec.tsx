import { render, screen } from "@testing-library/react"

import { Blackboard } from "."

describe("<Blackboard />", () => {
    it("should render the heading element and the passed children", () => {
        render(
            <Blackboard>
                <h1 data-testid="heading">Test</h1>
            </Blackboard>
        )

        expect(
            screen.getByRole("heading", { name: /test/i })
        ).toBeInTheDocument()
        expect(screen.getByTestId(/heading/i)).toBeInTheDocument()
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })
})
