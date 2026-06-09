import { render, screen } from "@testing-library/react"
import { repositoryMocks } from "test/mocks"

import { ProjectsTemplate, ProjectsTemplateProps } from "."

jest.mock("next-seo", () => ({
    NextSeo: () => null
}))

jest.mock("components", () => ({
    Blackboard: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="blackboard">{children}</div>
    ),
    TechList: () => <ul data-testid="tech-list" />
}))

jest.mock("./sub-components", () => ({
    RepositoryDescription: () => <p data-testid="repository-description" />,
    RepositoryTitle: () => <div data-testid="repository-title" />
}))

describe("<ProjectsTemplate />", () => {
    const defaultProps: ProjectsTemplateProps = {
        repositories: repositoryMocks.list
    }

    it("should render Blackboard component", () => {
        render(<ProjectsTemplate {...defaultProps} />)

        expect(screen.getAllByTestId("blackboard")).toHaveLength(4)
    })

    it("should render RepositoryTitle component", () => {
        render(<ProjectsTemplate {...defaultProps} />)

        expect(screen.getAllByTestId("repository-title")).toHaveLength(4)
    })

    it("should render TechList component", () => {
        render(<ProjectsTemplate {...defaultProps} />)

        expect(screen.getAllByTestId("tech-list")).toHaveLength(4)
    })

    it("should render RepositoryDescription component", () => {
        render(<ProjectsTemplate {...defaultProps} />)

        expect(screen.getAllByTestId("repository-description")).toHaveLength(4)
    })
})
