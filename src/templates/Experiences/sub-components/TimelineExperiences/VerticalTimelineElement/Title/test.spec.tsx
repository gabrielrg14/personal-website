import { render, screen } from "@testing-library/react"
import { timelineMocks } from "test/mocks"

import { Title, TitleProps } from "."

describe("<Title />", () => {
    const defaultProps: TitleProps = {
        title: timelineMocks.experiences[2].title
    }

    it("should render title text", () => {
        render(<Title {...defaultProps} />)

        expect(screen.getByText(/senior developer/i)).toBeInTheDocument()
    })

    it("should render title heading", () => {
        render(<Title {...defaultProps} />)

        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    })

    it("should render heading with correct text", () => {
        render(<Title {...defaultProps} />)

        const heading = screen.getByRole("heading", { level: 1 })
        expect(heading.textContent).toBe("Senior Developer")
    })
})
