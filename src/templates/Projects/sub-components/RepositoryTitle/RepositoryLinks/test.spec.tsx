import { render, screen } from "@testing-library/react"
import { repositoryMocks } from "test/mocks"

import { RepositoryLinks, RepositoryLinksProps } from "."

jest.mock("./LinkItem", () => ({
    LinkItem: () => <li data-testid="link-item" />
}))

describe("<RepositoryLinks />", () => {
    const defaultProps: RepositoryLinksProps = {
        repository: repositoryMocks.tailwindInterfaces
    }

    it("should always render github link", () => {
        render(
            <RepositoryLinks
                repository={{ ...defaultProps.repository, homepage: "" }}
            />
        )

        expect(screen.getByTestId("link-item")).toBeInTheDocument()
    })

    it("should render website link when repository has homepage", () => {
        render(<RepositoryLinks {...defaultProps} />)

        expect(screen.getAllByTestId("link-item")).toHaveLength(2)
    })

    it("should not render website link when repository has no homepage", () => {
        render(<RepositoryLinks repository={repositoryMocks.sharppenApiV2} />)

        expect(screen.getAllByTestId("link-item")).toHaveLength(1)
    })
})
