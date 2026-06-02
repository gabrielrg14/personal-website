import { render, screen } from "@testing-library/react"
import { timelineMocks } from "test/mocks"

import { TimelineExperiences } from "."

jest.mock("react-vertical-timeline-component", () => ({
    VerticalTimeline: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="vertical-timeline">{children}</div>
    )
}))

jest.mock("./VerticalTimelineElement", () => ({
    VerticalTimelineElement: () => (
        <div data-testid="vertical-timeline-element" />
    )
}))

jest.mock("utils/timelines", () => ({
    experiences: timelineMocks.experiences
}))

describe("<TimelineExperiences />", () => {
    it("should render VerticalTimeline component", () => {
        render(<TimelineExperiences />)

        expect(screen.getByTestId("vertical-timeline")).toBeInTheDocument()
    })

    it("should render VerticalTimelineElement component for each experience", () => {
        render(<TimelineExperiences />)

        expect(screen.getAllByTestId("vertical-timeline-element")).toHaveLength(
            3
        )
    })
})
