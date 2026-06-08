import { render, screen } from "@testing-library/react"

import { NotABug } from "."

describe("<NotABug />", () => {
    it("should render not a bug text", () => {
        render(<NotABug />)

        expect(screen.getByText(/this is not a bug/i)).toBeInTheDocument()
    })

    it("should render not a bug heading", () => {
        render(<NotABug />)

        expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
    })

    it("should render heading with correct text", () => {
        render(<NotABug />)

        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
            "Phew, this is not a bug 😌🙏"
        )
    })
})
