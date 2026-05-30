import { render, screen } from "@testing-library/react"
import { repositoryMocks } from "test/mocks"

import { RepositoryTitle, RepositoryTitleProps } from "."

jest.mock("./RepositoryName", () => ({
    RepositoryName: () => <h2 data-testid="repository-name" />
}))

jest.mock("./RepositoryLinks", () => ({
    RepositoryLinks: () => <ul data-testid="repository-links" />
}))

describe("<RepositoryTitle />", () => {
    const defaultProps: RepositoryTitleProps = {
        repository: repositoryMocks.tailwindInterfaces
    }

    it("should render RepositoryName component", () => {
        render(<RepositoryTitle {...defaultProps} />)

        expect(screen.getByTestId("repository-name")).toBeInTheDocument()
    })

    it("should render RepositoryLinks component", () => {
        render(<RepositoryTitle {...defaultProps} />)

        expect(screen.getByTestId("repository-links")).toBeInTheDocument()
    })
})
