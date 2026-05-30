import { render, screen } from "@testing-library/react"
import { repositoryMocks } from "test/mocks"

import { RepositoryName, RepositoryNameProps } from "."

jest.mock("utils", () => ({
    formatRepositoryName: (repositoryName: string) =>
        repositoryName
            .replace(/-/g, " ")
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
}))

describe("<RepositoryName />", () => {
    const defaultProps: RepositoryNameProps = {
        name: repositoryMocks.travelTheWorld.name
    }

    it("should render repository name", () => {
        render(<RepositoryName {...defaultProps} />)

        expect(screen.getByText(/travel the world/i)).toBeInTheDocument()
    })

    it("should render repository name heading", () => {
        render(<RepositoryName {...defaultProps} />)

        expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
    })

    it("should render heading with correct text", () => {
        render(<RepositoryName {...defaultProps} />)

        const heading = screen.getByRole("heading", { level: 2 })
        expect(heading.textContent).toBe("Travel The World")
    })
})
