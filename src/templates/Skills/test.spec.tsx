import { render, screen } from "@testing-library/react"

import { SkillsTemplate } from "."

jest.mock("next-seo", () => ({
    NextSeo: () => null
}))

jest.mock("components", () => ({
    Blackboard: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="blackboard">{children}</div>
    )
}))

jest.mock("./sub-components", () => ({
    ListSection: () => <div data-testid="list-section" />
}))

describe("<SkillsTemplate />", () => {
    it("should render Blackboard component", () => {
        render(<SkillsTemplate />)

        expect(screen.getByTestId("blackboard")).toBeInTheDocument()
    })

    it("should render ListSection component", () => {
        render(<SkillsTemplate />)

        expect(screen.getAllByTestId("list-section")).toHaveLength(4)
    })
})
