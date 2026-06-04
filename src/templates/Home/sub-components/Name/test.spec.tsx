import { render, screen } from "@testing-library/react"
import { userMock } from "test/mocks"

import { Name, NameProps } from "."

describe("<Name />", () => {
    const defaultProps: NameProps = {
        text: userMock.user.name
    }

    it("should render name text", () => {
        render(<Name {...defaultProps} />)

        expect(
            screen.getByText(/gabriel rapucci gonzalez/i)
        ).toBeInTheDocument()
    })

    it("should render name heading", () => {
        render(<Name {...defaultProps} />)

        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    })

    it("should render heading with correct text", () => {
        render(<Name {...defaultProps} />)

        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
            "Gabriel Rapucci Gonzalez"
        )
    })
})
