import { render, screen } from "@testing-library/react"

import { Layout } from "."

describe("<Layout />", () => {
    it("should render the main element and passed children", () => {
        render(
            <Layout>
                <div data-testid="layout">Test</div>
            </Layout>
        )

        expect(screen.getByRole("main")).toBeInTheDocument()
        expect(screen.getByTestId("layout")).toBeInTheDocument()
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })
})
