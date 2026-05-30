import { render, screen } from "@testing-library/react"

import { LinkItem, LinkItemProps } from "."
import { repositoryMocks } from "test/mocks"

describe("<LinkItem />", () => {
    const defaultProps: LinkItemProps = {
        title: "GitHub",
        href: repositoryMocks.travelTheWorld.html_url,
        ariaLabel: "Go to the project repository on GitHub",
        children: repositoryMocks.travelTheWorld.name
    }

    it("should render the passed children", () => {
        render(<LinkItem {...defaultProps} />)

        expect(screen.getByText("travel-the-world")).toBeInTheDocument()
    })

    it("should render with correct attributes", () => {
        render(<LinkItem {...defaultProps} />)

        const link = screen.getByRole("link", { name: /github/i })

        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute("title", "GitHub")
        expect(link).toHaveAttribute(
            "href",
            "https://github.com/gabrielrg14/travel-the-world"
        )
        expect(link).toHaveAttribute(
            "aria-label",
            "Go to the project repository on GitHub"
        )
        expect(link).toHaveAttribute("target", "_blank")
        expect(link).toHaveAttribute("rel", "noreferrer")
    })
})
