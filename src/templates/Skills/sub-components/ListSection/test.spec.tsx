import { render, screen } from "@testing-library/react"
import { techMocks } from "test/mocks"

import { ListSection } from "."

jest.mock("components", () => ({
    TechList: ({ list }: { list: string[] }) => (
        <div data-testid="tech-list">{list.join(",")}</div>
    )
}))

describe("<ListSection />", () => {
    it("should render an empty list", () => {
        render(<ListSection title="Empty Technologies" list={[]} />)

        const techList = screen.getByTestId("tech-list")

        expect(techList).toBeInTheDocument()
        expect(techList).toHaveTextContent("")
    })

    it("should render the passed list", () => {
        const list = techMocks.known

        render(<ListSection title="Known Technologies" list={list} />)

        expect(screen.getByTestId("tech-list")).toHaveTextContent(
            list.join(",")
        )
    })

    it("should render title heading", () => {
        render(
            <ListSection
                title={"Knowledge Technologies"}
                list={techMocks.knowledge}
            />
        )

        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    })

    it("should render heading with correct text", () => {
        const title = "Potential Technologies"

        render(<ListSection title={title} list={techMocks.potential} />)

        const heading = screen.getByRole("heading", { level: 1 })
        expect(heading.textContent).toBe(title)
    })

    it("should render title and list", () => {
        const title = "Studying Technologies"

        render(<ListSection title={title} list={techMocks.studying} />)

        expect(screen.getByText(title)).toBeInTheDocument()
        expect(screen.getByTestId("tech-list")).toBeInTheDocument()
    })

    it("should render TechList component", () => {
        render(<ListSection title="TechList" list={techMocks.known} />)

        expect(screen.getByTestId("tech-list")).toBeInTheDocument()
    })
})
