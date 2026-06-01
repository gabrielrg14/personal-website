import { render, screen } from "@testing-library/react"
import { techMocks } from "test/mocks"

import { ListSection, ListSectionProps } from "."

jest.mock("components", () => ({
    TechList: ({ list }: { list: string[] }) => (
        <ul data-testid="tech-list">{list.join(", ")}</ul>
    )
}))

describe("<ListSection />", () => {
    const defaultProps: ListSectionProps = {
        title: "Known Technologies",
        list: techMocks.known
    }

    it("should render an empty list", () => {
        render(<ListSection {...defaultProps} list={[]} />)

        const techList = screen.getByTestId("tech-list")

        expect(techList).toBeInTheDocument()
        expect(techList).toHaveTextContent("")
    })

    it("should render the passed list", () => {
        render(<ListSection {...defaultProps} />)

        expect(screen.getByTestId("tech-list")).toHaveTextContent(
            "html, css, javascript"
        )
    })

    it("should render title heading", () => {
        render(<ListSection {...defaultProps} />)

        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    })

    it("should render heading with correct text", () => {
        render(<ListSection {...defaultProps} />)

        const heading = screen.getByRole("heading", { level: 1 })
        expect(heading.textContent).toBe("Known Technologies")
    })

    it("should render TechList component", () => {
        render(<ListSection {...defaultProps} />)

        expect(screen.getByTestId("tech-list")).toBeInTheDocument()
    })
})
