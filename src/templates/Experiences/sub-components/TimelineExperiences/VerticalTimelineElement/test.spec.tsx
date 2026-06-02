import { render, screen } from "@testing-library/react"
import { timelineMocks } from "test/mocks"

import { VerticalTimelineElement, VerticalTimelineElementProps } from "."

jest.mock("react-vertical-timeline-component", () => ({
    VerticalTimelineElement: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="vertical-timeline-element">{children}</div>
    )
}))

jest.mock("components", () => ({
    TechList: ({ list }: { list: string[] }) => (
        <ul data-testid="tech-list">
            {list.map((tech) => (
                <li key={tech} data-testid="tech-item">
                    {tech}
                </li>
            ))}
        </ul>
    )
}))

jest.mock("./Title", () => ({
    Title: () => <h1 data-testid="title" />
}))

jest.mock("./Company", () => ({
    Company: () => <h2 data-testid="company" />
}))

jest.mock("./Description", () => ({
    Description: () => <p data-testid="description" />
}))

describe("<VerticalTimelineElement />", () => {
    const defaultProps: VerticalTimelineElementProps = {
        experience: timelineMocks.experiences[1]
    }

    it("should render VerticalTimelineElement component", () => {
        render(<VerticalTimelineElement {...defaultProps} />)

        expect(
            screen.getByTestId("vertical-timeline-element")
        ).toBeInTheDocument()
    })

    it("should render Title component", () => {
        render(<VerticalTimelineElement {...defaultProps} />)

        expect(screen.getByTestId("title")).toBeInTheDocument()
    })

    it("should render Company component", () => {
        render(<VerticalTimelineElement {...defaultProps} />)

        expect(screen.getByTestId("company")).toBeInTheDocument()
    })

    it("should render Description component", () => {
        render(<VerticalTimelineElement {...defaultProps} />)

        expect(screen.getByTestId("description")).toBeInTheDocument()
    })

    it("should render TechList component", () => {
        render(<VerticalTimelineElement {...defaultProps} />)

        expect(screen.getByTestId("tech-list")).toBeInTheDocument()
    })

    it("should render all experience skills", () => {
        render(<VerticalTimelineElement {...defaultProps} />)

        expect(screen.getByText("vuejs")).toBeInTheDocument()
        expect(screen.getByText("nodejs")).toBeInTheDocument()
        expect(screen.getByText("nestjs")).toBeInTheDocument()
    })

    it("should render the correct number of experience skills", () => {
        render(<VerticalTimelineElement {...defaultProps} />)

        expect(screen.getAllByTestId("tech-item")).toHaveLength(3)
    })
})
