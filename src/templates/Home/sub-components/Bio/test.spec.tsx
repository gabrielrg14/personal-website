import { render, screen } from "@testing-library/react"
import { userMock } from "test/mocks"

import { Bio, BioProps } from "."

describe("<Bio />", () => {
    const defaultProps: BioProps = {
        text: userMock.user.bio
    }

    it("should render bio text", () => {
        render(<Bio {...defaultProps} />)

        expect(
            screen.getByText(/front-end software engineer/i)
        ).toBeInTheDocument()
    })

    it("should render bio heading", () => {
        render(<Bio {...defaultProps} />)

        expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
    })

    it("should render heading with correct text", () => {
        render(<Bio {...defaultProps} />)

        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
            "Front-end Software Engineer"
        )
    })
})
