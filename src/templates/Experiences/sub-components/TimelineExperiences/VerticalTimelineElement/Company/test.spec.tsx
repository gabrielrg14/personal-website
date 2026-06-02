import { render, screen } from "@testing-library/react"
import { timelineMocks } from "test/mocks"

import { Company, CompanyProps } from "."

describe("<Company />", () => {
    const defaultProps: CompanyProps = {
        company: timelineMocks.experiences[0].company
    }

    it("should render company text", () => {
        render(<Company {...defaultProps} />)

        expect(screen.getByText(/startup ltd/i)).toBeInTheDocument()
    })

    it("should render company heading", () => {
        render(<Company {...defaultProps} />)

        expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
    })

    it("should render heading with correct text", () => {
        render(<Company {...defaultProps} />)

        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
            "Startup Ltd"
        )
    })
})
