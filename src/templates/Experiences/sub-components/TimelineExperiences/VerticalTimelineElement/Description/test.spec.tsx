import { render, screen } from "@testing-library/react"
import { timelineMocks } from "test/mocks"

import { Description, DescriptionProps } from "."

describe("<Description />", () => {
    const defaultProps: DescriptionProps = {
        description: timelineMocks.experiences[1].description
    }

    it("should render the passed text", () => {
        render(<Description {...defaultProps} />)

        expect(
            screen.getByText(/mid-level development role/i)
        ).toBeInTheDocument()
    })

    it("should render paragraph element", () => {
        const { container } = render(<Description {...defaultProps} />)

        const paragraph = container.querySelector("p")
        expect(paragraph?.tagName).toBe("P")
    })

    it("should render paragraph with correct text", () => {
        const { container } = render(<Description {...defaultProps} />)

        const paragraph = container.querySelector("p")
        expect(paragraph?.textContent).toBe("Mid-level development role")
    })

    it("should render empty paragraph when description is empty", () => {
        const { container } = render(<Description description="" />)

        const paragraph = container.querySelector("p")
        expect(paragraph?.textContent).toBe("")
    })
})
