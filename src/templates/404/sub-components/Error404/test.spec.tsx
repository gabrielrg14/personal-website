import { render, screen } from "@testing-library/react"

import { Error404 } from "."

describe("<Error404 />", () => {
    it("should render 404 error text", () => {
        render(<Error404 />)

        expect(screen.getByText(/404 error/i)).toBeInTheDocument()
    })

    it("should render 404 error heading", () => {
        render(<Error404 />)

        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    })

    it("should render heading with correct text", () => {
        render(<Error404 />)

        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
            "404 Error"
        )
    })
})
