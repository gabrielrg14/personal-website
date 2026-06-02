import { render, screen } from "@testing-library/react"

import { ExperiencesTemplate } from "."

jest.mock("next-seo", () => ({
    NextSeo: () => null
}))

jest.mock("components", () => ({
    Blackboard: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="blackboard">{children}</div>
    )
}))

jest.mock("./sub-components", () => ({
    TimelineExperiences: () => <div data-testid="timeline-experiences" />
}))

describe("<ExperiencesTemplate />", () => {
    it("should render Blackboard component", () => {
        render(<ExperiencesTemplate />)

        expect(screen.getByTestId("blackboard")).toBeInTheDocument()
    })

    it("should render TimelineExperiences component", () => {
        render(<ExperiencesTemplate />)

        expect(screen.getByTestId("timeline-experiences")).toBeInTheDocument()
    })
})
