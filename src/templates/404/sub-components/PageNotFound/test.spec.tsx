import { render, screen } from "@testing-library/react"

import { PageNotFound } from "."

describe("<PageNotFound />", () => {
    it("should render page not found text", () => {
        render(<PageNotFound />)

        expect(
            screen.getByText(/the content for that page was not found/i)
        ).toBeInTheDocument()
    })

    it("should render page not found heading", () => {
        render(<PageNotFound />)

        expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument()
    })

    it("should render heading with correct text", () => {
        render(<PageNotFound />)

        expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
            "But the content for that page was not found! 🤔"
        )
    })
})
